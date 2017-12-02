/**
 * Data Access Object for New
 */
const console = require("clor");
var mongoose = require('mongoose');

var NoticiaSchema = require("../db/NoticiaSchema");

function obtener(callbackObtener){
	console.cyan.log("LocalDAO.js obtener();");
	NoticiaSchema.find(function(err, noticias) {
		console.log("Buscando noticias localmente");
		if(err){
			console.red.log(err);
			callbackObtener(false,null,"Error al conectarse con la db local");
		} else {
	    	if(noticias.length==0){
	    		console.log("Sin noticias");
	    		callbackObtener(false,null,"No hay noticias localmente");
	    	} else {
	    		console.log("Total noticias " + noticias.length);
	    		callbackObtener(true,noticias, "Se encontraron noticias");
	    	}
		}
    });
}

function obtenerConID(model,callbackObtener){
	console.cyan.log("LocalDAO.js obtenerConID(); ", model.idnoticia);
	NoticiaSchema.findOne({idnoticia:model.idnoticia},function(err, unaNoticia) {
		if(!err){
			console.log(unaNoticia);
	    	if(unaNoticia == null){
				callbackObtener(false,null, "No hay noticia con ese idnoticia");
			} else {
				callbackObtener(true,unaNoticia,"Noticia encontrada con ese idnoticia");				
			}
		} else {
			console.red.log(err);
			callbackObtener(false,null, err);
		}
	});
}

function guardar(model,callbackGuardar){
	console.cyan.log("LocalDAO.js: guardar();");
	console.cyan.log(model);

	NoticiaSchema.findOne({idnoticia:model.idnoticia},function(err, unaNoticia) {
		if(!err){
	    	if(unaNoticia == null){
				console.log("No existe noticia con ese ID, guardar");	    		
				var noticiaGuardable = new NoticiaSchema(model);
				noticiaGuardable.save(function(err, NoticiaSchema) {
					if (err){ 
						console.log("Noticia no guardada. Error " + err);
						callbackGuardar(false,null,"No se pudo guardar la noticia");
					} else {
						console.log("Noticia guardada");
						callbackGuardar(true,null,"Noticia Guardada");
					}
				});
			} else {
				callbackGuardar(true,unaNoticia,"Noticia encontrada con ese idnoticia");				
			}
		} else {
			console.red.log(err);
			callbackGuardar(false,null, err);
		}
	});	
}

function editar(model,callbackEditar){
	console.yellow.log("LocalDAO.js: editar(); Sin implementar");
	console.yellow.log(model);
}

function borrar(model,callbackBorrar){
	console.cyan.log("LocalDAO.js: borrar();");
	console.cyan.log(model);
	
	NoticiaSchema.find(function(err, noticias) {
		if(noticias.size!=0){
			for(var i =0;i<noticias.length;i++){
				var noticia = noticias[i];
				noticia.remove({_id:noticia._id},function(err){
					if(err){
						console.red.log(err);
					}
				});
				if(i==noticia.length-1){
					callbackBorrar(true);
				}			
			}
		} else {
			callbackBorrar(false);
		}
	});
}

module.exports = {
	obtener:obtener,
	obtenerConID:obtenerConID,
	guardar:guardar,
	borrar:borrar
}