const sha = require('sha1');
module.exports = (value) => {
    const key = 'very-safe';
    return sha(`${sha(key)}${value}`);
};