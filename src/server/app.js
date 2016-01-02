var koa = require("koa");
var route = require("koa-route");
var express = require("express");
var server = express();
var c2k = require("koa-connect");
var jsonServer = require("json-server");
var serve = require("koa-static");
var jsonServerRoute = jsonServer.router(__dirname + '/db.json');

server.use("/api/db", jsonServerRoute);

var render = require("../lib/render.js");

var app = koa();
app.use(c2k(server));
app.use(serve(__dirname + "/../tmp"));

app.use(route.get("/", function * () {
  this.body = yield render("index");
}));

app.listen(3000);

module.exports = app;