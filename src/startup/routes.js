const express = require("express");
const dashboard = require("./../routes/dashboard");
const auth = require("./../routes/auth");
const userRoute = require("./../routes/user.route");
const authMiddleware = require("./../middleware/error");
const API_URI = "/api/v1/";
module.exports = function(app) {
  app.use(express.json());
  app.use("/", dashboard);
  app.use(API_URI + "auth", auth);
  app.use(API_URI + "user", userRoute);
  app.use(authMiddleware);
};
