var orm = require("../config/orm.js");
var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  create: function (name, cb) {
    orm.create("burgers", ["burger_name", "eaten"],
      [name, 0],
      cb);
  },
  update: function (id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {eaten: true}, condition, cb);
  }
};

module.exports = burgers;
