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

  function setGroceryItemBought(item, isBought) {
    var index;
    var _item = items.filter(function(a) {
      return a.name == item.name;
    })[0];
    item.purchased = isBought || false;
    triggerListeners();
  }

  function deleteGroceryItem(item) {
    var index;
    items.filter(function (_item, _index) {
      if (_item.name == item.name) {
        index = _index;
      }
    });
    items.splice(index, 1);
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
          case 'delete':
            deleteGroceryItem(e.payload);
            break;
          case 'buy':
            setGroceryItemBought(e.payload, true);
            break;
          case 'unbuy':
            setGroceryItemBought(e.payload, false);
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