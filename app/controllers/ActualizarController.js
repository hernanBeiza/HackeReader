var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');

const dao = require("./../daos/ActualizarDAO");
const console = require("clor");

/** Returns the news available in the RN API
 * @param  {request} request made it from the Jquery client
 * @param  {response} response
 * @return {response} response in json format
 */
function actualizar(req,res){
	dao.actualizar(function(result,noticias,mensaje){
		if(result){
		    res.json({result:true,noticias:noticias,mensaje:mensaje});
		} else {
			res.json({result:false,noticias:null,mensaje:mensaje})
		}		
	});

}
/** Returns the news available in the RN API, for background update using a CRON task
 * @param  {request} request made it from the Jquery client
 * @param  {response} response
 * @return {response} response in json format
 */

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