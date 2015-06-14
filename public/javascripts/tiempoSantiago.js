
$( document ).ready(function() {
	setHora('America/Santiago','#horaSantiago');
	setTiempo('http://api.wunderground.com/api/fb0c272ef37c8b13/geolookup/conditions/forecast/q/Chile/Santiago.json','#tiempoSantiago');
});