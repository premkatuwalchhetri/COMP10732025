const output = document.getElementById('output');
// function for the name size ingredients and fruits
function Smoothie(name, size, base, ingredients, fruits) {
    this.name = name;
    this.size = size;
    this.base = base;
    this.ingredients = ingredients;
    this.fruits = fruits;
}
// this method for the description of the smoothies
Smoothie.prototype.describe = function() {
    return "the special smoothie for " + this.name +"\nwith " + this.size + "\nsize"+"\nwith the Base " + this.base +"\nof the ingredients " + this.ingredients.join(", ") +"\nwith our special fruits is ready.. have a nice day. enjoy your smothiee  " ;
};
//this adds the event for the order button
document.getElementById('smoothieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    let sizeValue = document.getElementById('size').value;
    //this gets the input value from element with id called base
    let base = "";
    const bases = document.getElementsByName('base');
    for (let i = 0; i < bases.length; i++) {
        if (bases[i].checked) {
            base = bases[i].value;
        }
    }
    //this stores checked ingredient values in array
    let ingredients = [];
    const checks = document.getElementsByName('ingredient');
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            ingredients.push(checks[i].value);
        }
    }
    // this gets the input value from element with id called fruits
    const fruits = "Mixed Fruits";
    // created a new smoothie object
    const smoothieOrder = new Smoothie(name, sizeValue, base, ingredients, fruits);
    // this show the result on the page
    const message = smoothieOrder.describe();
    output.textContent = message;
});
