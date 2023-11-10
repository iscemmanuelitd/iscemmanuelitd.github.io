function mensaje(){
	alert("Hola")
}

function api(){
	let url =  "http://ecs.amazonaws.com/AWSECommerceService/AWSECommerceService.wsdl"


	$.get(url,function(res){
	console.log(res)
})

	   


	
}