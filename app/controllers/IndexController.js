var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');

const console = require("clor");

function index(req, res) {
	console.cyan.log("IndexController");
	/*
	res.render('index', {
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session
	});
	*/
	var obtenerDAO = require("./../daos/LocalDAO");
	obtenerDAO.obtener(function(result,noticias,mensaje){
		console.log("IndexController");
		//console.log(result,noticias,mensaje);
		
		res.render('index', {
			cargando : false,
			mensaje: mensaje,
			noticias: noticias
		});					
	});
	//res.render('index');					
}

module.exports = {
	index:index,
};