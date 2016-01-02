var dispatcher = require("../dispatcher.js");

function GroceryItemStore() {
  var items = [
    {
      name: "Ice Cream"
    },
    {
      name: "Waffles"
    },
    {
      name: "Candy",
      purchased: true
    },
    {
      name: "Snarks"
    }
  ];
  var listeners = [];

  function getItems() {
    return items;
  }

  function addGroceryItem(item) {
    items.push(item);
    triggerListeners();
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function triggerListeners(){
    listeners.forEach(function(listener) {
      listener(items);
    })
  }

  dispatcher.register(function(e) {
    var split = e.type.split(":");
    if (split[0] == 'grocery-item') {
        switch(split[1]) {
          case 'add':
            addGroceryItem(e.payload);
            break;
        }
    }
  })

  return {
    getItems: getItems,
    onChange: onChange
  }
}

module.exports = new GroceryItemStore();