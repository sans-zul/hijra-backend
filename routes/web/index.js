const express = require('express');
const router = express.Router();
const passport = require('passport');

passportConfig(
    passport,
    async (username) => (await db.auth_account.findAll({
        where : {
            username
        }
    })),
    async (req, id) => {
        try {
            let account = req.session.db.account;
            if (!account) {
                account = await db.auth_account.findByPk(id);
                req.session.db.account = account;
            }
            
            let user = {};
            if (account) {

                user = req.session.db.user;
                if (!user) {
                    user = await db.auth_user.findByPk(account.user_id);
                    req.session.db.user = user;
                }

                let user_role = req.session.db.user_role;
                if (!user_role) {
                    user_role = await db.auth_user_role_n.findAll({
                        where : {
                            account_id : id
                        }
                    });
                    req.session.db.user_role = user_role;
                }


                let group_id = [];
                let group = [];
                user_role.forEach(ur => {
                    if (!group_id.find(x => x == ur.group_id)) {
                        group_id.push(ur.group_id);
                        group.push({
                            id : ur.group_id,
                            name : ur.group_name
                        });
                    }
                });

                let role = req.session.db.role;
                if (!role) {
                    role = await db.auth_role_n.findAll({
                        where : {
                            group_id
                        }
                    });
                    req.session.db.role = role;
                }
                
                let default_role = {};
                let user_role_default = user_role.find(x => x.user_role_is_default == 1);
                if (user_role_default) {
                    default_role = role.find(x => x.group_id == user_role_default.group_id && x.is_default == 1);
                    if (!default_role) {
                        default_role = {};
                    }
                }

                for (let i = 0; i < group.length; i++) {
                    group[i].prefix = role.find(x => x.is_default == 1 && x.group_id == group[i].id) ? 
                                    role.find(x => x.is_default == 1 && x.group_id == group[i].id).pa_url_pattern : default_role.pa_url_pattern;
                }

                return {
                    account,
                    user,
                    user_role,
                    role : {
                        list : role,
                        default : default_role,
                        active : {},
                        group
                    },
                    my : {}
                };
            }
            return {
                account : null,
                user : null,
                user_role : null,
                role : null,
                my: null
            };
        } catch (err) {
            console.log(err);
            return {
                account : null,
                user : null,
                user_role : null,
                role : null,
                my: null
            };
        }
        
    }
);

router.use(passport.initialize());
router.use(passport.session());
includeRoutes(router, __filename, __dirname);

module.exports = router;