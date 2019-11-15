var connection = require("./connection.js");

function questionMark(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}
var orm = {
    all: function(tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryS = "INSERT INTO " + table;

        queryS += " (";
        queryS += cols.toString();
        queryS += ") ";
        queryS += "VALUES (";
        queryS += questionMark(vals.length);
        queryS += ") ";

        console.log(query);

        connection.query(queryS, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        var queryS = "UPDATE " + table;

        queryS += " SET ";
        queryS += objToSql(objColVals);
        queryS += " WHERE ";
        queryS += condition;

        console.log(query);
        connection.query(queryS, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
