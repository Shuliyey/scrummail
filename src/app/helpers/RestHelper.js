var $ = require("jquery");

module.exports = {
  get: function(url) {
    return $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
      });
  },
  post: function(url, data) {
    return $.ajax({
        url: url,
        method: "POST",
        data: data,
        dataType: "json"
      });
  }
}