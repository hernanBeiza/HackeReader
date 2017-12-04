var mongoose = require('mongoose');
var db;
/**
 * MongoDB local path
 * @type {String}
 */
var rutaDB = "mongodb://localhost:27017/hackernewsdb";

db = mongoose.createConnection(rutaDB);
db.on('error', function(err){
	if(err) throw err;
});

db.once('open', function callback () {
	console.info('Mongo db connected successfully');
});

module.exports = db;