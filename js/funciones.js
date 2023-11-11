function mensaje(){
	alert("Hola")
}


function api(){
  $.ajax({
    tyoe:"GET",
    url: "https://maps.googleapis.com/maps/api/directions/json?destination=Montreal&origin=Toronto&key=miKry",
    xhrFields: {
       withCredentials: true
    }
 },j=>{
   console.log(j)
 }
  )
}
