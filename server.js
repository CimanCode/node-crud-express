const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const ProductRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hallo prom node api");
});

app.use("/api/product", ProductRoute);

mongoose
  .connect(
    "mongodb+srv://firmanabdul278:bismillah019@cluster0.8gyaoxo.mongodb.net/noder_crud?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("server run on port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });
