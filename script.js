let radio_black = document.getElementById("radio_black");
let radio_pink = document.getElementById("radio_pink");
let radio_complect = document.getElementById("radio_complect");
let for_pink = document.getElementById("for_pink");
let for_complect = document.getElementById("for_complect");


let itog = document.getElementById("itog");
let colvo = document.getElementById("colvo");

let radio_options = for_pink.getElementsByTagName("input");
let checkboxes = for_complect.getElementsByTagName("input");
let sum;
let start = false;

colvo.oninput =  function() {
    if(!start) {
    var audio = new Audio;
    audio.src = "hava nagila.mp3";
    audio.autoplay = true;
        start = true;
    }
    if(sum != undefined) {
        itog.innerHTML = sum * Number(colvo.value);
    }
}

for(let radio of radio_options) {
    radio.onclick = function() {
        let colvo_value = colvo.value;
        if(colvo_value == "") {
            colvo_value = 0;
        }
    sum = Number(radio.value) ;
    itog.innerHTML = sum * Number(colvo_value);
    }
}
radio_black.onclick = function() {
    for_pink.style.display = "none";
    for_complect.style.display = "none";
    let colvo_value = colvo.value;
    if(colvo_value == "") {
        colvo_value = 0;
    }
    colvo_value = Number(colvo_value);
    sum = Number(radio_black.value);
    itog.innerHTML = colvo_value * Number(radio_black.value);
}

radio_pink.onclick = function() {
    for_pink.style.display = "block";
    for_complect.style.display = "none";
    sum = 0;
    itog.innerHTML = 0;

}

radio_complect.onclick = function() {
    for_pink.style.display = "none";
    for_complect.style.display = "block";
    sum = 0;
    itog.innerHTML = 0;
}

for (let checkbox of checkboxes) {
    checkbox.onclick = function() {
        if (checkbox.checked) {
            sum += Number(checkbox.value);
            
        }
        else sum -= Number(checkbox.value);
        let colvo_value = colvo.value;
    if(colvo_value == "") {
        colvo_value = 0;
    }
    colvo_value = Number(colvo_value);
    itog.innerHTML = sum * colvo_value;
    }
}
