var elem = document.getElementById("button");
var flag = document.getElementById("reviews");
elem.onclick = function() {
    if (flag.style.visibility == "visible") {
        flag.style.visibility = "hidden";
    }
    else {
        flag.style.visibility = "visible";
    }
    var audio = new Audio;
    audio.src = "♂ Gachimuchi ♂ - ♂ Mr. Sex O' Deep ♂.mp3";
    audio.autoplay = true;
}