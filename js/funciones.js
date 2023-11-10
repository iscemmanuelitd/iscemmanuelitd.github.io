function mensaje(){
	alert("Hola")
}

function api(){
	let url =  "https://developers.google.com/maps/documentation/directions/overview?hl=es-419"
	$.get(url,function(res){
	console.log(res)
})

	   


	
}