// Para mostrar el mapa en html
function initMap() {
  var lindavista = {lat: 19.5107303, lng: -99.139637};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: lindavista
  });
  var marker = new google.maps.Marker({
    position: lindavista,
    map: map
  });
}

// Haciendo objetos mis restaurantes
var restaurantes =[
  {
    "nombre": "Zona Rosa",
		"dirección": "Londres, Zona Rosa, CDMX.",
    "foto": "http://via.placeholder.com/300x200"
    "ubicación:"
  },
  {
    "nombre": "Narvarte",
		"dirección": "Mexicana, Benito Juárez, CDMX.",
    "foto": "http://via.placeholder.com/300x200"
    "ubicación:"
  },
  {
    "nombre": "Sta. Ma. la Ribera",
		"dirección": "Sabino, Cuauhtemoc, CDMX.",
    "foto": "http://via.placeholder.com/300x200"
    "ubicación:"
  },
  {
    "nombre": "Av. Imán",
		"dirección": "Av. del Imán, El Caracol, CDMX.",
    "foto": "http://via.placeholder.com/300x200"
    "ubicación:"
  },
  {
    "nombre": "multiplaza Aragón",
		"dirección": "Hank, Aragón, Edo. Mex.",
    "foto": "http://via.placeholder.com/300x200"
    "ubicación:"
  },
];


// Plantilla para mis restaurantes
var plantillaRestaurant =
    '<div class="row">'+
      '<div class="col s12 m7">'+
        '<h5 class="header">__nombre__</h5>'+
        '<div class="card horizontal">'+
          '<div class="card-image">'+
            '<img src="__foto__>'+
          '</div>'+
          '<div class="card-stacked">'+
            '<div class="card-content">'+
              '<p>__direccion__</p>'+
            '</div>'+
            '<div class="card-action">'+
              '<a href="#">__ubicacion__</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';



    var cargarRestaurant = function () {
    	$("#search-form").submit(filtrarContactos);
    };

//para filtrar contactos
    var filtrarContactos = function (e) {
    	e.preventDefault();
    	var criterioBusqueda = $("#search").val().toLowerCase();
    	var contactosFiltrados = contactos.filter(function (contacto) {
    		return contacto.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
    	});
    	mostrarContactos(contactosFiltrados);
    };

    var mostrarContactos = function (contactos) {
    	var plantillaFinal = "";
    	contactos.forEach(function (contacto) {
    		plantillaFinal += plantillaContacto.replace("__nombre__", restaurantes.nombre)
    			.replace("__direccion__", restaurantes.direccion)
    			.replace("__foto__", restaurantes.foto)
          .replace("__ubicacion__", restaurantes.ubicacion);
    });
      $("#restaurantes").html(plantillaFinal);

    var cargarMapa = function(){

//Para el mapa
        if (navigator.geolocation) {
    		navigator.geolocation.getCurrentPosition(mostrarPosicion);
    	} else {
    		alert("Actualice su navegador");
    	}
    };

    var mostrarPosicion = function (posicion) {
    	var coordenadas = {
    		lat: posicion.coords.latitude,
    		lng: posicion.coords.longitude
    	};
        console.log(posicion.coords.latitude);
    	mostrarMapa(coordenadas);
    };

// Cargar hasta que este listo todo el documento.
$(document).ready(cargarPagina);
