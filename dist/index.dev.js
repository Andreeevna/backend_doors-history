"use strict";

var express = require('express');

var cors = require('cors');

var cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: 'dsoxasi6c',
  api_key: '938933394984286',
  api_secret: '205yE__Qyf1-1Y1ofVZE3gr3nGw',
  secure: true
});

var products = require('./products');

var сollections = require('./сollections');

var app = express();
app.use(express.json());
app.use(cors());
app.get('/', function (req, res) {
  res.send('Welcome our to online shop API...');
});
app.get('/products', function (req, res) {
  res.send(products);
});
app.get('/collections', function (req, res) {
  res.send(сollections);
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