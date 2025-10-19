/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName = "John snow";
let age = Math.floor(Math.random() * 50);
let isSuperhero = true;
let specialPower = "lighting";
let favoriteFood = "pasta";

// Function to generate a random character description
function updateDescription() {
    let description = "Are you a god of hammers hmmm..... " + characterName + ", or you are a god of thunder. you are already " + age + "years old man you and loves " + favoriteFood + " and can " + specialPower + "with your foot hahahahahahaa";
    document.querySelector("#characterDescription").textContent = description;
}

// Functions to update character's age
function randomAge() {
    age = Math.floor(Math.random() * 50);
    updateDescription();
}

function addAge() {
    age++;
    updateDescription();
}

function minusAge() {
    age--;
    updateDescription();
}

// Function to update the character's description after changing age
function changeAge(newAge) {
    age = newAge;
    updateDescription();
}
// Add event listeners for buttons using querySelector
document.querySelector("#generateButton").addEventListener("click", randomAge);
document.querySelector("#increaseAgeButton").addEventListener("click", addAge);
document.querySelector("#decreaseAgeButton").addEventListener("click", minusAge);

updateDescription();

