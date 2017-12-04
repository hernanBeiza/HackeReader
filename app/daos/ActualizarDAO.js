const constants = require("./../../config/constants");
const console = require("clor");
var mongoose = require('mongoose');
var localDAO = require("./LocalDAO");

/**
 * Data Access Object for get elements from the service on HackerNews
 */

/** Get the collections from the HN api
 * @param  {callback}
 * @return {Object} {result:true|false,noticias:[],mensaje:string} 
 */
function actualizar(callbackObtener){
	console.log("NoticiaDAO.js actualizar");
	var request = require("request");
	var url = constants.URL;
	request({
	    url: url,
	    json: true
	}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
	        if(body.hits.length>0){
		    	var noticiasBuenas = [];

		        for(noticia of body.hits){
		        	var titulo = noticia.title;
		        	var url = noticia.url;
		        	var autor = noticia.author;
		        	var idnoticia = noticia.objectID;
		        	var fecha = noticia.created_at;
		        	var valid = 1;
		        	if(!titulo){
		        		titulo = noticia.story_title;
		        	}
		        	if(!url){
		        		url = noticia.story_url;
		        	}
		        	if(titulo && url){
		        		//Validar que la noticia tenga título y url
		        		console.log(idnoticia);
		        		var model = {idnoticia:idnoticia,titulo:titulo,autor:autor,fecha:fecha,url:url,valid:1};
		        		noticiasBuenas.push(model);
		        	}
		        }
			
			    var actual = 0;
		        for(item of noticiasBuenas){
    				localDAO.guardar(item,function(result,mensaje){
    					actual++;
    					if(actual==noticiasBuenas.length){
    						localDAO.obtener(function(result,noticias,mensaje){
				        		callbackObtener(true,noticias,"Noticias obtenidas correctamente");        						
    						})
    					}
    				});
		        }

	        } else {
		    	callbackObtener(false,null,"No hay noticias nuevas")
	        }

	    } else {
			console.red.log(error);
	    	callbackObtener(false,null,error)
	    }
	});
}


module.exports = {
	actualizar:actualizar
}