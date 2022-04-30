features = () => {
    let featuresList = document.querySelector('.features-container');
    featuresList.classList.toggle("features-container-flex");
}

company = () => {
    let companyList = document.querySelector('.company-container');
    companyList.classList.toggle("company-container-flex");
}

let menu = document.querySelector('#menu-mobile');
let closeMenu = document.querySelector('#close-menu');
let layout = document.querySelector('#layout');

menu.addEventListener('click', function() {
    document.querySelector("#navbar").classList.add("navbar-flex");
    layout.classList.add("navbar-flex");
    document.querySelector("body").style.overflowY = "hidden";
}) 


closeMenu.addEventListener('click', function() {
    document.querySelector("#navbar").classList.remove("navbar-flex");
    layout.classList.remove("navbar-flex");
    document.querySelector("body").style.overflowY = "auto";
}) 