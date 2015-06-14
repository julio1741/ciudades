
$( document ).ready(function() {
	setHora('America/Lima','#horaLima');
	setTiempo('http://api.wunderground.com/api/fb0c272ef37c8b13/geolookup/conditions/forecast/q/Peru/Lima.json','#tiempoLima');
});