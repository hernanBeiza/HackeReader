/**
 * Data Access Object for get elements from the service on HackerNews
 */
const constants = require("./../../config/constants");
const console = require("clor");
var mongoose = require('mongoose');

var localDAO = require("./LocalDAO");

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
		        	var id = parseInt(noticia.story_id);
		        	var fecha = noticia.created_at;
		        	if(!titulo){
		        		titulo = noticia.story_title;
		        	}
		        	if(!url){
		        		url = noticia.story_url;
		        	}
		        	if(titulo && url){
		        		//Validar que la noticia tenga título y url
		        		var model = {idnoticia:id,titulo:titulo,fecha:fecha,url:url};
		        		noticiasBuenas.push(model);
		        	}
		        }
			
			    var actual = 0;
		        for(item of noticiasBuenas){
    				localDAO.guardar(item,function(result,mensaje){
    					actual++;
    					if(actual==noticiasBuenas.length){
			        		callbackObtener(true,null,"Proceso de noticias terminado");        						
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