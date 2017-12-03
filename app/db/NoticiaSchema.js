/**
 * Objeto de la DB, esquema
 */
var mongoose = require('mongoose');
var db = require('./DB');
var Schema = mongoose.Schema;

var NoticiaSchema = new Schema({
	idnoticia:Number,
	titulo:String,
	autor:String,
	url:String,
	fecha:String,
	valid:Number
});

NoticiaSchema.methods.toString = function(){
	console.log("NoticiaSchema.toString()");
	console.log("idnoticia " + this.idnoticia);	
	console.log("titulo " + this.titulo);	
	console.log("autor " + this.autor);	
	console.log("url " + this.url);	
	console.log("fecha " + this.fecha);	
	console.log("valid " + this.valid);
};

module.exports = db.model('Noticia', NoticiaSchema,'noticia');