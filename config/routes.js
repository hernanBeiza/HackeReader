var IndexController = require('../app/controllers/IndexController');

var NoticiaController = require('../app/controllers/NoticiaController');
var ActualizarController = require('../app/controllers/ActualizarController');

//you can include all your controllers

module.exports = function (app, passport) {
    //Index View: News Item list
	app.get('/', IndexController.index);
    // API Routes
    app.get('/api/noticias', NoticiaController.obtener);
    app.delete('/api/noticias/:idnoticia', NoticiaController.eliminar);
    app.get('/api/actualizar', ActualizarController.actualizar);
}