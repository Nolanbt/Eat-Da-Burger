var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput};`
        connection.query(queryString, function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    create: function(table, col, val, cb){
        var queryString = `INSERT INTO ${table} ${col} VALUES (${val})`;
        console.log(queryString);

        connection.query(queryString, function(err,result){
            if(err) throw err;
            cb(result);
        })
    }

}

module.exports = orm;