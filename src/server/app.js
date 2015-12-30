var koa = require("koa");
var route = require("koa-route");
var express = require("express");
var server = express();
var c2k = require("koa-connect");
var jsonServer = require("json-server");
var jsonServerRoute = jsonServer.router(__dirname + '/db.json');

server.use("/api/db", jsonServerRoute);

var app = koa();
app.use(c2k(server));
app.use(route.get("/", function * () {
  this.body = "Hello World";
}));

module.exports = app;