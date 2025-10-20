//this Wait for the html to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
//geeting rgb sliders
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

//Select the html element so we can change its styles 
var body = document.body;
// created function to changes the background color based on input values
function changeColor() {
    var r = red.value;
    var g = green.value;
    var b = blue.value;

    var color = "rgb(" + r + "," + g + "," + b + ")";
    body.style.backgroundColor = color;
}
// this change the Color whenever the rgb inputs change
red.addEventListener("input", changeColor);
green.addEventListener("input", changeColor);
blue.addEventListener("input", changeColor);
});
