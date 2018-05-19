var connection = require("../config/connection.js");

var orm = {
    all: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result)
        })
    },

    create: function(table, col, val, cb){
        var queryString = "INSERT INTO ?? ( ?? ) VALUES( ?? )";
        connection.query(queryString,[table, col, val], function(err, result){
            if (err) throw err;
            cb(result)
        })
    },

    update: function(table, col, val, condition, cb){
        var queryString = "UPDATE ?? SET ?? = ?? WHERE ??";
        console.log("this is the table ", table);
        console.log("this is the column ", col);
        console.log("this is the column value", value);
        console.log("this is the condition ", condition);
        connection.query(queryString, [table, col, value, condition], function(err, result){
            if (err) throw err;
            cb(result)
        })
    }
};

module.exports = orm;