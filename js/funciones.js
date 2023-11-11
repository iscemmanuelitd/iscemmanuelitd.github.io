function mensaje(){
	alert("Hola")
}


function api(){
  $.ajax({
    tyoe:"GET",
    url: "https://maps.googleapis.com/maps/api/directions/json?destination=Montreal&origin=Toronto&key=AIzaSyC1nQ-eu0isX-u9eX-Cl5kHjdMWBEBYVvs",
    xhrFields: {
       withCredentials: true
    }
 })
}
