function mensaje(){
	alert("Hola")
}


function api(){
  $.ajax({
    url: "https://developers.google.com/maps/documentation/directions/overview?hl=es-419",
    xhrFields: {
       withCredentials: true
    }
 },j=>{
   console.log(j)
 }
  )
}
