// prevents requests for favicon
const faviconHandler = (req, res, next) => {
    if(req.url === '/favicon.ico') {
        return;
    }
    next();
};

module.exports = faviconHandler;
