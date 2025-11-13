const output = document.getElementById('output');
// function for the name size ingredients and fruits
function Smoothie(name, size, ingredients, fruits) {
    this.name = name;
    this.size = size;
    this.ingredients = ingredients;
    this.fruits;
// this method for the description of the smoothies
Smoothie.prototype.describe = function() {
    alert("Smoothie for", this.name,"\nin this Size:", this.size, "\nwhith this ingredients:", this.ingredients, "\nwith special fruith:", this.fruits,);
};
//this adds the event for the order button
document.getElementById('orderBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    let sizeValue = "";
    const sizes = document.getElementsByName('size');
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            sizeValue = sizes[i].value;
        }
    }
    //this gets the input value from element with id called base
    const base = document.getElementById('base').value;
    //this stores checked ingredient values in array
    let ingredients = [];
    const checks = document.getElementsByName('ingredient');
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            ingredients.push(checks[i].value);
        }
    }
    // this gets the input value from element with id called sweetness
    const sweetness = document.getElementById('sweetness').value;
    // created a new smoothie object
    const smoothieOrder = new Smoothie(name, sizeValue, base, ingredients, sweetness);
