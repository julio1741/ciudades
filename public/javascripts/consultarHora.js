function setHora(timeZone,id){
	var theData = {};
	theData['zone'] = timeZone;
	theData['format'] = 'json';
	theData['key'] = 'AHT76HK4PQSP';
	$.ajax({
		type: "*",
		url: "http://api.timezonedb.com",
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
			console.log(result.timestamp)
			var date = new Date(parseFloat((result.timestamp).toFixed(1)*1000));
			var hora = date.getUTCHours();
			var minuto = date.getUTCMinutes();
			var segundo = date.getUTCSeconds();
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
		$(id).text("Tiempo actual en " + location + " es de: " + parseFloat(convertToC(temp_f)).toFixed(1)+"°c");
	  }
  });
}
function convertToC(f) {
		var fTempVal = parseFloat(f);
	var c = (fTempVal - 32) * (5/9);
	return c;
}
