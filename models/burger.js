var orm = require("../config/orm.js");


//burger Model
var burger = {
    //display all
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    //create data 
    create: function(cols, vals, cb) {
        orm.update("burgers", cols, vals, function(res) {
            cb(res)
        })

    },
    //update ID to true
    update: function(id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            eaten: true
        }, condition, cb);
    }
};

module.exports = burger;