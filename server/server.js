"use strict";

/*if (process.env.NODE_ENV === "production")
    require("newrelic");
*/
const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || 'localhost';

const os = require("os");
//const http2 = require("spdy");
const http = require("http");
const express = require("express");
const fs = require("fs");
const RoutesConfig = require("./config/routes.conf");
const DBConfig = require("./config/db.conf");
const Routes = require("./routes/index");
const startupFunctions = require('./commons/startup');
const app = express();
RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());

const opts = {
  key: fs.readFileSync(__dirname + "/cert/server.key"),
  cert: fs.readFileSync(__dirname + "/cert/server.crt"),
  spdy: {plain: true}
}

startupFunctions.forEach((callback) => callback());

/*
http2.createServer(opts, app)
     .listen(PORT, HOST, () => {
       console.log(`up and running @: ${HOST} on port: ${PORT}`);
       console.log(`enviroment: ${process.env.NODE_ENV}`);
     });
*/
http.createServer(app)
    .listen(PORT, HOST, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
