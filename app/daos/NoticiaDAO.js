/**
 * Data Access Object for Noticia. Get news from hackernews
 */
const constants = require("./../../config/constants");
const console = require("clor");
var mongoose = require('mongoose');

var localDAO = require("./LocalDAO");

function obtener(callbackObtener){
    console.yellow.log("Obtener noticias cargadas desde la DB");    
    localDAO.obtener(function(result,noticias,mensaje){
		if(result){
			callbackObtener(result,noticias,mensaje);				
		} else if(!result && !noticias){
			callbackObtener(false,null,mensaje);
		} else {
			callbackObtener(false,null,"Hubo un problema al obtener las noticias desde la db local");
		}
    });
}

module.exports = {
	obtener:obtener,
}