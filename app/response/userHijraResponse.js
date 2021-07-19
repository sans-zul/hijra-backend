

module.exports = (profile, user, code = 200, message = null) => {
    if (profile) {
        return {
            success : true,
            code,
            data : {
                user : {
                    id : user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    gender: user.gender,
                    image: `${base_url}/multimedia/user/profile/${user.image}`,
                    bio: user.bio,
                    tanggal_lahir: user.tanggal_lahir,
                    followers: user.followers,
                    following: user.following,
                    post: user.post
                }
            },
            message
        };
    }
    return {
        success : true,
        code,
        data : {
            user : {
                id : user.id,
                name : user.name,
                email : user.email,
                image : `${base_url}/multimedia/user/profile/${user.image}`,
            }
        },
        message
    }
};