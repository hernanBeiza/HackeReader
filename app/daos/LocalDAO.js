/**
 * Data Access Object for New
 */
const console = require("clor");
var mongoose = require('mongoose');
var dateFormat = require('dateformat');

var NoticiaSchema = require("../db/NoticiaSchema");

function obtener(callbackObtener){
	console.cyan.log("LocalDAO.js obtener();");
	NoticiaSchema.find({valid:1},function(err, noticias) {
		console.log("Buscando noticias localmente");
		if(err){
			console.red.log(err);
			callbackObtener(false,null,"Error al conectarse con la db local");
		} else {
	    	if(noticias.length==0){
	    		console.log("No hay noticias localmente");
	    		//Ir a buscar a internet usando ActualizarDAO
	    		var actualizarDAO = require("./ActualizarDAO");
	    		actualizarDAO.actualizar(function(result,noticias,mensaje){
		    		callbackObtener(result,noticias,mensaje);
	    		});

	    	} else {
	    		console.log("Total noticias " + noticias.length);
	    		for (noticia of noticias){
	    			var fecha = dateFormat(noticia.fecha, "h:MM");
	    			noticia.fecha = fecha;
	    		}
	    		callbackObtener(true,noticias, "Se encontraron noticias");
	    	}
		}
    });
}

function obtenerConID(model,callbackObtener){
	console.cyan.log("LocalDAO.js obtenerConID(); ", model.idnoticia);
	NoticiaSchema.findOne({idnoticia:model.idnoticia},function(err, unaNoticia) {
		if(!err){
			//console.log(unaNoticia);
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
	//console.cyan.log(model);
	//Only save the news if has a different id, story_id
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

function actualizar(model,callbackEditar){
	console.cyan.log("LocalDAO.js: editar();");
	console.cyan.log(model);
	NoticiaSchema.findOneAndUpdate({idnoticia:model.idnoticia,autor:model.autor}, {valid:2}, {upsert:false}, function(err, laNoticia){
		if(err){
			console.red.log(err);
			callbackEditar(false,err);
		} else {
			console.log(laNoticia);
			callbackEditar(true,"Noticia borrada");
		}
	});
}

//For update the valid. 1 mean is visible in ui, 2 was deleted from the ui
function eliminar(idnoticia,callbackBorrar){
	console.cyan.log("LocalDAO.js: borrar();");
	//console.cyan.log(idnoticia);
	NoticiaSchema.findOneAndUpdate({idnoticia:idnoticia}, {idnoticia:idnoticia,valid:2}, {upsert:false}, function(err, laNoticia){
		if(err){
			console.red.log(err);
			callbackBorrar(false,err);
		} else {
			callbackBorrar(true,"Noticia borrada");
		}
	});
	/*
	NoticiaSchema.findOne({idnoticia:idnoticia},function(err, laNoticia) {
		if(err){
			console.red.log(err);
			callbackBorrar(false,err);
		} else {
			if(laNoticia){
				NoticiaSchema.remove({idnoticia:idnoticia},function(err) {
					if(err){
						console.red.log(err);
						callbackBorrar(false,err);
					} else {
						callbackBorrar(true,"Noticia borrada");
					}
				});
			} else {
				callbackBorrar(false, "No hay noticia con ese id");
			}
		}
	});
	*/
}

module.exports = {
	obtener:obtener,
	obtenerConID:obtenerConID,
	guardar:guardar,
	actualizar:actualizar,
	eliminar:eliminar
}