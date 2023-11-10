function mensaje(){
	alert("Hola")
}


function api(){
  $.ajax({
    tyoe:"GET",
    url: "https://developers.google.com/maps/documentation/directions/overview?hl=es-419",
    xhrFields: {
       withCredentials: true
    }
 },j=>{
   console.log(j)
 }
  )
}
