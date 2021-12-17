const express = require("express");
const ProductsController = require("./controllers/ProductsController");
const routes = express.Router();

routes.get("/", ProductsController.ReadAll);

module.exports = routes;
