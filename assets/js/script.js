
var soupIn = document.querySelector("#soupCheck");
var shelIn = document.querySelector("#shelCheck");
var volIn = document.querySelector("#volCheck");
var btn = document.querySelector("#buttonSubmit");
var formEl = document.querySelector("#startUp");

//Feching Soup Kitchen models from the api

    fetch("https://api.inneedofsoup.xyz/api/soup_kitchen?q")
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