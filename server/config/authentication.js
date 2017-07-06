module.exports = {
    jwt: {
        token: process.env.WATERBOT_JWT_TOKEN || 'c3b12u31bndsdx7dxdynydyd',
        getToken: (req) => {
            let cookie = null;
            if (req.cookies && req.cookies.wb_token) {
                cookie = req.cookies.wb_token;
            }
            console.log(req.headers.authorization, cookie);
            return req.headers.authorization || cookie;
        }
    },
    cookies: {
        secret: process.env.WATERBOT_COOKIES_SECRET || '1c2312c8dns8mcsdadsmjdcimojdijo'
    }
}