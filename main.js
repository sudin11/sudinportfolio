
const nav=document.getElementsByClassName("max-width");
let lastScrollY = window.scrollY;


function showInput(){
    if(!(document.getElementById("rate"))){

    const fieldset = document.getElementById("hiring"); 
    const label = document.createElement("label");
    label.setAttribute("for", "username");
    label.setAttribute("id", "rate");
    label.innerHTML = "Hourly Rate";
    label.style.display = "block";
    // insert label
    document.getElementById("radioBtn").appendChild(label);
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "hourly");
    input.style.display = "block";
    document.getElementById("radioBtn").appendChild(input);
    }
    else if((document.getElementById("rate").style.display == "none") && (document.getElementById("hourly").style.display == "none")) {
        document.getElementById("rate").style.display = "block";
        document.getElementById("hourly").style.display = "block";
    }
}

function hideInput(){
    if(document.getElementById("rate") && (document.getElementById("rate").style.display == "block")){
        document.getElementById("rate").style.display = "none";
        document.getElementById("hourly").style.display = "none";
    }
}

function payRateValidation() {
    let RateInput = document.getElementById('rate');
    if (RateInput.value <= 0) {
        messages.push("- Enter a valid  pay rate")
    }
}

let menu = document.querySelector('.menu-btn');
let navbar = document.querySelector('.menu');

menu.addEventListener('click', function() {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
});