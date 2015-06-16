
$( document ).ready(function() {
	setHora('America/Argentina/Buenos_Aires','#horaBuenosAires');
	setTiempo('http://api.wunderground.com/api/fb0c272ef37c8b13/geolookup/conditions/forecast/q/Argentina/Buenos_Aires.json','#tiempoBuenosAires');
});