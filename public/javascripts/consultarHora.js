function setHora(timeZone,id){
	var theData = {};
	theData['tz'] = timeZone;
	$.ajax({
		type: "*",
		url: "http://json-time.appspot.com/time.json",
		contentType: "text/javascript",
		dataType:"jsonp",
		data: theData,
		headers: {
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Origin':'*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
			'Access-Control-Allow-Headers': 'Authorization'
		},
		success: function(result){
			var hora = result.hour;
			var minuto = result.minute;
			var segundo = result.second;
			if (hora.toString().length == 1)
				hora = "0" + hora;
			if (minuto.toString().length == 1)
				minuto = "0" + minuto;
			if (segundo.toString().length == 1)
				segundo = "0" + segundo;				
			$(id).text(" "+hora+":"+minuto+":"+segundo);
		}
	});
}
function setTiempo(url,id){
  $.ajax({
	  url : url,
	  dataType : "jsonp",
	  success : function(parsed_json) {
	  var location = parsed_json['location']['city'];
	  var temp_f = parsed_json['current_observation']['temp_f'];
		$(id).text("Tiempo actual en " + location + " es de: " + parseFloat(convertToC(temp_f)).toFixed(1)+"ºc");
	  }
  });
}
function convertToC(f) {
		var fTempVal = parseFloat(f);
	var c = (fTempVal - 32) * (5/9);
	return c;
}
