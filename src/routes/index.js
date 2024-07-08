const { Router } = require('express');

const routes = Router();

const userRouter = require("./user.routes");
const userRoutes = require('./user.routes');

routes.use("/users", userRouter)

module.exports = routes;
