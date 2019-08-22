function chamarAPI(){
	console.log("Chamando API");
	const endpoint = "https://api.exchangeratesapi.io/latest";
	$.get(endpoint, callback );
}

function callback(resultado){
	console.log(resultado);
	var sMoedaDestino = $("#moeda_destino").val();
	var fvalor = resultado.rates[sMoedaDestino];
	$("#valor_destino").text(fvalor);
	$("#moeda_destino_celula").text(sMoedaDestino);
}

