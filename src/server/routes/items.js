module.exports = function (app) {
  var route = require("koa-route");
  var parse = require("co-body");
  var guid = require("guid");
  var items = [
    {
      id: guid.raw(),
      name: "Ice Cream"
    },
    {
      id: guid.raw(),
      name: "Waffles"
    },
    {
      id: guid.raw(),
      name: "Candy",
      purchased: true
    },
    {
      id: guid.raw(),
      name: "Snarks"
    },
    {
      id: guid.raw(),
      name: "Cookies"
    }
  ];

  app.use(route.get("/api/items", function * () {
    this.body = items;
    this.status = 200;
  }));

  app.use(route.post("/api/items", function * () {
    var item = yield parse(this);
    items.push(item);
    this.status = 204;
  }));
}