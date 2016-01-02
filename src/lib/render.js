var views = require("co-views");

module.exports = views(__dirname + '/../app', {
  map: {html: 'swig'}
})