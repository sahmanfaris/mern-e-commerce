import express from "express";
import products from "./data/products.js";

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.REACT_APP_PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));