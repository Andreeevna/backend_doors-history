"use strict";

var express = require('express');

var cors = require('cors');

var products = require('./products');

var app = express();
app.use(express.json());
app.use(cors());
app.get('/', function (req, res) {
  res.send('Welcome our to online shop API...');
});
app.get('/products', function (req, res) {
  res.send(products);
});
app.get('/products/:id', function (req, res) {
  var id = parseInt(req.params.id);
  var filterItem = products.find(function (item) {
    return item.id === id;
  });
  if (!filterItem) res.status(404).send('Обьект не найден');
  res.send(filterItem);
});
var port = process.env.PORT || 5000;
app.listen(port, console.log("Server running on port ".concat(port)));