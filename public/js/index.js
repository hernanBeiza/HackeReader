/*
function eliminarNoticia(noticia){
	console.log("eliminarNoticia");
	console.log(noticia);
}
*/

//I have to make this using JQuery... I want to do using AngularjS, but I don't want to make the things complicated
function irNoticia(url){
	console.log("irNoticia");
	console.log(url);
	var win = window.open(url, '_blank');
	win.focus();
}

$(".clickEliminar").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	var idnoticia = $(this).data("noticia");
	//console.log(idnoticia);
	var ruta = "/api/noticias/"+idnoticia;
	console.log(ruta);
	$.ajax({
    	url: ruta,
    	type: 'DELETE',
    	success: function(data) {
        	// Do something with the result
        	console.log(data);
        	if(data.result){
				location.reload();
			} else {
				console.error(data.mensaje);
        	}
		}
	});
});