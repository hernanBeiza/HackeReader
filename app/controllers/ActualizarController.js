var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');

const dao = require("./../daos/ActualizarDAO");
const console = require("clor");

function actualizar(req,res){
	dao.actualizar(function(result,noticias,mensaje){
		if(result){
		    res.json({result:true,noticias:noticias,mensaje:mensaje});
		} else {
			res.json({result:false,noticias:null,mensaje:mensaje})
		}		
	});

}

function actualizarInterno(callback){
	dao.actualizar(function(result,noticias,mensaje){
		if(result){
			callback({result:true,noticias:noticias,mensaje:mensaje});
		} else {
			callback({result:false,noticias:null,mensaje:mensaje})
		}		
	});	
}


module.exports = {
	actualizar:actualizar,
	actualizarInterno:actualizarInterno
};