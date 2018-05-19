var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function(vals, cb) {
        orm.create('burgers', 'burger_name', vals, function(res) {
            cb(res);
        });
    },

    update: function(id, cb) {
        orm.updates('burgers', 'id', val, function(res) {
            cb(res);
        });
    }
    
};

module.exports = burger;