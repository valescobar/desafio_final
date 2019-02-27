	//GOOGLE MAPS
	var marker = null;
	var mymap = null;

	//coordenadas hardcodeadas dentro de array para hacer funcionar el mapa de forma local a la maquina.

	var coords = {
		stg: '-33.4377968,-70.6504451',
		vlp: '-33.0458456,-71.6196749',
		qta: '-32.879997,-71.2473555',
		pta: '-53.1625446,-70.907785',
		plo: '-33.032648, -71.537627'
	}
	
	

	$(document).ready(function(){
		
		
        generarMapa();
		
		//Llamada ajax para cargar datos de ciudad de santiago en primera carga de págin
		
		//ajaxCall();

		$(document).on('change','#selectComunas',function(){
			var selected = $(this).val();
			
			if(selected != ""){
				changeMarkerPosition(coords[selected]);
				//ajaxCall(coords[selected]);

			}

		});

	});


	//Función que inicializa mapa con marcador en Santiago de Chile
	function generarMapa() {
		
        mymap = L.map('map').setView([-33.032648,-71.537627], 5);
		//cambiar url por la propia con nombre de usuario y token
		L.tileLayer('https://api.mapbox.com/styles/v1/cindysanhueza/cjs92l7py09ga1fnzpmb8styy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHlzYW5odWV6YSIsImEiOiJCVWVsUTBZIn0.7cZxUC2vdDdYsR9PLUKKGQ', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		}).addTo(mymap);
		
		//Creamos nuevo marcador de mapa
		var marker = L.marker([-33.032648,-71.537627]).addTo(mymap);
		
		marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

		//localizador botón
		//L.control.locate().addTo(mymap);
    }

	//Función para generar un nuevo marcador
    function changeMarkerPosition(coords) {

		//Separamos el string de coordenadas
        var latitud = coords.split(",")[0];
		var longitud = coords.split(",")[1];

        mymap.panTo(new L.LatLng(latitud, longitud));

		L.marker([latitud,longitud]).addTo(mymap);

    }

	//variable para usar gps de localización
	var lc = L.control.locate({
		position: 'topright',
		cacheLocation: true,
		keepCurrentZoomLevel: true,
		strings: {
			title: "Muéstrame donde estoy"
		}
	}).addTo(mymap);
