var cookieParser = require('cookie-parser')
module.exports = {
    jwt: {
        token: process.env.WATERBOT_JWT_TOKEN || 'c3b12u31bndsdx7dxdynydyd',
        getToken: (req) => {
            let cookie = null;
            if (req.cookies && req.cookies.wb_token) {
                cookie = req.cookies.wb_token;
            }
            let cookies = req.headers.cookie ? req.headers.cookie.split(';') : [];
            let tokenCookie = null;
            cookies.forEach((c) => {
                if (c.split('=')[0] == 'wb_token') {
                    let splitted = c.split('=');
                    splitted.shift();
                    tokenCookie = splitted.join('=');
                }
            })

            return req.headers.wb_token || cookie || tokenCookie;
        }
    },
    cookies: {
        secret: process.env.WATERBOT_COOKIES_SECRET || '1c2312c8dns8mcsdadsmjdcimojdijo'
    },
    user: {
        secret: process.env.WATERBOT_USER_SECRET || 'c123c123jmndjciicq!!!'
    }
}