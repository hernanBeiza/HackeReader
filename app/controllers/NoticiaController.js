var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');

const dao = require("./../daos/NoticiaDAO");
const console = require("clor");

function obtener(req,res) {
	console.log("NoticiasController: obtener();");
	dao.obtener(function(result,noticias,mensaje){
		if(result){
		    res.json({result:true,noticias:noticias,mensaje:mensaje});
		} else {
			res.json({result:false,noticias:null,mensaje:mensaje})
		}		
	});
}

module.exports = {
	obtener:obtener,
};