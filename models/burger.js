// IMPORT ORM METHODS
var orm = require("../config/orm.js");

// Create the burger object
var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
  
    insertOne: function(burger_name, cb) {
      orm.insertOne(burger_name, function(res) {
        cb(res);
      });
    },
  
    updateOne: function(condition, cb) {
      orm.updateOne("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  
module.exports = burger;