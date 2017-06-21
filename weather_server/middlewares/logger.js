const LOG_IN_YELLOW = '\x1b[33m%s\x1b[0m';

const logger = (req, res, next) => {
    console.log(LOG_IN_YELLOW, `[${req.method}] : ${req.url}`);
    next();
};

module.exports = logger;
