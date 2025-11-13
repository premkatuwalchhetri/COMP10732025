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
