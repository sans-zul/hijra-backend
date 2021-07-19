module.exports = (message, code = 500) => {
    return {
        success : false,
        code,
        data : null,
        message,
    }
};