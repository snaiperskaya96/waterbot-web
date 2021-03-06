"use strict";

const CustomDataRoutes = require("../api/custom-data/route/custom-data-route");
const UserRoutes = require("../api/user/route/user-route");
const PlantRoutes = require('../api/plant/route/plant-route');
const AdminSettingsRoutes = require('../api/user/route/admin-settings-route');

const User = require('../api/user/dao/user-dao');
const StaticDispatcher = require("../commons/static/index");
const jwt = require('express-jwt');
const authenticationConfig = require('../config/authentication');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = class Routes {
      static init(app, router) {
        app.use('/api', jwt({
          secret: authenticationConfig.jwt.token,
          getToken: authenticationConfig.jwt.getToken
        }).unless({path: ['/api/user/authenticate', '/api/user/verify']}));

        app.use(bodyParser.urlencoded({
          extended: true
        }));

        app.use(cookieParser());

        UserRoutes.init(router);
        PlantRoutes.init(router);
        CustomDataRoutes.init(router);
        AdminSettingsRoutes.init(router);

        router
          .route("*")
          .get(StaticDispatcher.sendIndex);


        app.use("/", router);

        // Error handling
        app.use((err, req, res, next) => {
          if (err.name === 'UnauthorizedError') {
            res.status(401).json('Invalid token');
          } else {
            console.log(err);
            next();
          }
        });
   }
}
