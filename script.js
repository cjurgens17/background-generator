var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}


function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) +  ')';
}



function randomGradient(){
	body.style.background = "linear-gradient(to right, " + random_rgb() + ", " + random_rgb() + ")";
	css.textContent = body.style.background + ";";
}





button.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);


