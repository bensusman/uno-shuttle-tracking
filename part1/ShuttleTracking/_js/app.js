$(document).ready(function(){
	if(navigator.geolocation){
		navigator.geolocation.watchPosition(success);
	}else{
		$('#gmap').html('<p>Geolocation is not supported.</p>');
	}

});//end of ready

function success(position){

	var userPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var mapOption = {
		zoom: 15,
		center: new google.maps.LatLng(41.258363, -96.010712),
		mapTypeId: google.maps.MapTypeId.ROAD
	};
	var mapPosition = document.getElementById('gmap');
	var map = new google.maps.Map(mapPosition, mapOption);

	//begining and end stop of the shuttle route
	var begin = new google.maps.LatLng(41.258196, -96.011812);
	var end = new google.maps.LatLng(41.243280, -96.011004);

	//adding bus stop to the busstopArray
	var busstopArray = [];
	
	busstopArray[0] = new google.maps.LatLng(41.258196, -96.011812); //uno library
	busstopArray[1] = new google.maps.LatLng(41.247420, -96.016212); //uno PKI
	busstopArray[2] = new google.maps.LatLng(41.245186, -96.015416); //uno Mammel Hall
	busstopArray[3] = new google.maps.LatLng(41.243280, -96.011004); //scotte village

	var waypoints = [];
	for(var i = 0; i < busstopArray.length; i++){
		waypoints.push({
			location: busstopArray[i],
			stopover: true
		});
	}

	var directionsService = new google.maps.DirectionsService();
	var directionsRequest = {
		origin: begin,
		destination: end,
		waypoints: waypoints,
		travelMode: google.maps.TravelMode.DRIVING
	};

	directionsService.route(
		directionsRequest,
		function(response, status){
			if(status == google.maps.DirectionsStatus.OK){
				new google.maps.DirectionsRenderer({
					map: map,
					directions: response
				})
			}else{
				$('#gmap').append('Unable to retrieve your route <br>');
		    }
		 }
	) 

	addMarker(map, userPosition, 'I am Here', 'My Current Location');
}

function addMarker(map, position, title, content){
	var markerValue ={
		map: map,
		position: position,
		title: title,
		animation: google.maps.Animation.DROP
	};
	var marker = new google.maps.Marker(markerValue); //create a new marker
	var infoWindow = new google.maps.InfoWindow({     //add a popup information window to the marker
		content: content,
		position: position
	});

	google.maps.event.addListener(marker, 'click', function(){   //add a click event handler to the marker
		infoWindow.open(map);
	});//end listener
}
