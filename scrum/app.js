var koa = require("koa");
var route = require("koa-route");
var express = require("express");
var server = express();
var c2k = require("koa-connect");
var jsonServer = require("json-server");
var jsonServerRoute = jsonServer.router('db.json');

server.use("/api", jsonServerRoute);

app = koa();
app.use(c2k(server));
app.use(route.get("/", function * () {
  this.body = "Hello World";
}))
app.listen(3000);

module.exports = app;