const express = require("express");
const Product = require("../models/product.model.js");
const Route = express.Router();
const {
  getProduct,
  CreateProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller.js");

Route.get("/", getProduct);
Route.get("/:id", getProductById);
Route.post("/", CreateProduct);
Route.put("/:id", updateProduct);
Route.delete("/:id", deleteProduct);

module.exports = Route;
