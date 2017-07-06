"use strict";

const TodoRoutes = require("../api/todo/route/todo-route");
const UserRoutes = require("../api/user/route/user-route");

const StaticDispatcher = require("../commons/static/index");
const jwt = require('express-jwt');
const authenticationConfig = require('../config/authentication');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = class Routes {
      static init(app, router) {
        app.use(jwt({
          secret: authenticationConfig.jwt.token,
          getToken: authenticationConfig.jwt.getToken
        }).unless({path: ['/api/user/authenticate']}));

        app.use(bodyParser.urlencoded({
          extended: true
        }));

        app.use(cookieParser(authenticationConfig.cookies.secret));

        UserRoutes.init(router);

        router
          .route("*")
          .get(StaticDispatcher.sendIndex);


        app.use("/", router);

        // Error handling
        app.use(function (err, req, res, next) {
          if (err.name === 'UnauthorizedError') {
            res.status(401).send('Invalid token...');
          }
        });

   }
}
