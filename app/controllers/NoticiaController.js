//API
var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');

const dao = require("./../daos/LocalDAO");
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

function actualizar(req,res){
	console.log("NoticiasController: eliminar();");
	console.log(req.body);	

	var enviar = true;
	var errores = "Faltó:"
	//story_id is present in more than one collections (a lot of authors can post the same story) from the hackernews services, so I decided to filter by storyid and autor name
	//
	var idnoticia = req.params.idnoticia;
	var autor = req.body.autor;

	if(!idnoticia){
		enviar = false;
		errores = "\nidnoticia";
	}
	if(!autor){
		enviar = false;
		errores +="\nautor"
	}
	if(enviar){
		dao.actualizar({idnoticia:idnoticia,autor:autor},function(result,mensaje){
			if(result){
			    res.json({result:true,mensaje:mensaje});
			} else {
				res.json({result:false,mensaje:mensaje})
			}		
		});			
	} else {
		res.json({result:false,mensaje:errores})	
	}
}

function eliminar(req,res){
	console.log("NoticiasController: eliminar();");
	console.log(req.params);
	var idnoticia = req.params.idnoticia;
	if(idnoticia){
		dao.eliminar(idnoticia,function(result,mensaje){
			if(result){
			    res.json({result:true,mensaje:mensaje});
			} else {
				res.json({result:false,mensaje:mensaje})
			}		
		});			
	} else {
		res.json({result:false,mensaje:"Faltó enviar idnoticia"})	
	}
}

module.exports = {
	obtener:obtener,
	actualizar:actualizar,
	eliminar:eliminar,
};