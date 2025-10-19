//geeting rgb sliders
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

//Select the html element so we can change its styles 
var body = document.documentElement;
// created function to changes the background color based on input values
function changeColor() {
    var r = red.value;
    var g = green.value;
    var b = blue.value;

    var color = "rgb(" + r + "," + g + "," + b + ")";
    body.style.backgroundColor = color;
}
// Combine the red, green, and blue values into an RGB color string
var color = "rgb(" + r + "," + g + "," + b + ")";

