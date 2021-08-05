$(document).ready(function(){
    $('.sidenav').sidenav();
});

//Feching shelters from api
fetch("https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/25/query?where=1%3D1&outFields=OWNER_RENTER,FACILITY_NAME,PROVIDER,ADDRESS,ZIP,WARD,TYPE,SUBTYPE,NUMBER_OF_BEDS,ON_SITE_MEDICAL_CLINIC,URL,ALREADY_PUBLIC_INFORMATION,AGES_SERVED&outSR=4326&f=json")
.then(response => response.json())
.then(data => console.log(data))


