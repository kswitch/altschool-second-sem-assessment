function checkApiKey(req, res, next) {
    const apiKey = req.headers['admin-api-key'];

    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
        return res.status(401).json({ message: `Not Authorized for this action` });
    }
    next();
}

module.exports = checkApiKey