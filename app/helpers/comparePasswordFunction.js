const sha = require('./shaFunction');

module.exports = (password, user) => {
    let secret = sha(user.id + '-' + password);
    return (secret === user.password);
};