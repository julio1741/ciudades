
$( document ).ready(function() {
	setHora('America/New_York','#horaNewYork');
	setTiempo('http://api.wunderground.com/api/fb0c272ef37c8b13/forecast/lang:SP/geolookup/conditions/q/CA/NewYork.json','#tiempoNewYork');
});