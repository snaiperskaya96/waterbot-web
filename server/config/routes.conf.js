"use strict";

const morgan = require("morgan");
const bodyParser = require("body-parser");
const contentLength = require("express-content-length-validator");
const helmet = require("helmet");
const express = require("express");
const compression = require("compression");
const zlib = require("zlib");
const config = require('./authentication')
const jwt = require('jsonwebtoken');
const User = require('../api/user/dao/user-dao')

module.exports = class RouteConfig {
    static init(application) {
        let _root = process.cwd();
        let _nodeModules = "/node_modules/";
        let _jspmPackages = "/jspm_packages/";
        let _clientFiles = (process.env.NODE_ENV === "production") ? "/client/dist/" : "/client/dev/";

        application.use(compression({
            level: zlib.Z_BEST_COMPRESSION,
            threshold: "1kb"
        }));
        
        application.use(express.static(_root + _nodeModules));
        application.use(express.static(_root + _jspmPackages));
        application.use(express.static(_root + _clientFiles));
        application.use(bodyParser.json());
        application.use(morgan("dev"));
        application.use(contentLength.validateMax({max: 999}));
        application.use(helmet());

        application.use((req, res, next) => {
          req.isTokenValid = false;
          const token = config.jwt.getToken(req);
          if (token) {
            let decodedUser;
            try { decodedUser = jwt.verify(token, config.jwt.token) } catch (err) {next();}
            User.getOneById(decodedUser._id)
            .then(user => {
              req.isTokenValid = user.lastSessionToken == token || user.apiTokens.indexOf(token) > 0;
              next();
            });
          } else {
              next();            
          }
        });

    }
}
