var soupIn = document.querySelector("#soupCheck");
var shelIn = document.querySelector("#shelCheck");
var volIn = document.querySelector("#volCheck");
var btn = document.querySelector("#buttonSubmit");
var formEl = document.querySelector("#startUp");

//Feching Soup Kitchen models from the api

fetch("https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/25/query?where=1%3D1&outFields=*&outSR=4326&f=json")
.then(response => response.json()).then(data => console.log(data))


function stepOne() {
    
    
}

btn.onclick = function stepOne() {

}

//formEl.addEventListener("Submit", e => {
//    var formData = {
//        soupKitchen: soupIn.addEventListener("click"),
//        shelterHome: shelIn.addEventListener("click"),
//        volunteer: volIn.addEventListener("click")
//    }
//    localStorage.setItem('formData', JSON.stringify(formData));
//    e.preventDefault();
//});
//console.log(localStorage.getItem('formData'));
