$(document).ready(function(){
    $('.sidenav').sidenav();
});

//Feching shelters from api
fetch("https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/25/query?where=1%3D1&outFields=OWNER_RENTER,FACILITY_NAME,PROVIDER,ADDRESS,ZIP,WARD,TYPE,SUBTYPE,NUMBER_OF_BEDS,ON_SITE_MEDICAL_CLINIC,URL,ALREADY_PUBLIC_INFORMATION,AGES_SERVED&outSR=4326&f=json")
.then(response => response.json())
.then(data => {
    console.log(data);
    // code to put json to html
    // iterate through each individual shelter 
    for(let i = 0; i< 20; i++){

        // div that will hold all the api html
        let shelter_div = $("<div id='shelter-div' class='col s12'>");

        // HOLDS EACH SHELTER NAME
        let shelterName = data.features[i].attributes.FACILITY_NAME;
        let name = $("<h3>").addClass("shelter-name").text(shelterName);
        shelter_div.append(name);

        //variable to hold address
        let shelterAddress = data.features[i].attributes.ADDRESS;
        let address = $("<p>").addClass("shelter-address").text(shelterAddress);
        shelter_div.append(address);

        // holds URL of shelter
        let shelterUrl = data.features [i].attributes.URL;
        console.log(shelterUrl);
        let Url = $("<a>").addClass("shelter-url").text(shelterUrl);
        shelter_div.append(Url);



        // push everything to shelter-display section in html
        $(".shelter-display").prepend(shelter_div);
    }
})


