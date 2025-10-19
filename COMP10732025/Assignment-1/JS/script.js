// this declares and initialize the arrays for each part of the story
let who = ["The cat", "A pirate", "My teacher", "An alien", "The dog", "An elephant"];
let what = ["found", "ate", "built", "lost", "painted", "slept"];
let wherePlace = ["in the park", "on the moon", "under the bed", "at school", "in the forest", "in the tree"];
let whenTime = ["yesterday", "this morning", "last night", "on Sunday", "after lunch", "at day"];
let whyReason = ["because it was fun", "to find treasure", "to surprise me", "to make a mess", "just for laughs", "for lunch"];
// created variables to remember which option is currently shown for each of the category
let whoIndex = 0;
let whatIndex = 0;
let whereIndex = 0;
let whenIndex = 0;
let whyIndex = 0;
//this gets the references to the HTML elements for each story part 
const whoChoice = document.getElementById("whoChoice");
const whatChoice = document.getElementById("whatChoice");
const whereChoice = document.getElementById("whereChoice");
const whenChoice = document.getElementById("whenChoice");
const whyChoice = document.getElementById("whyChoice");
const storyOutput = document.getElementById("storyOutput");
// functions to cycle through the words
function nextWho() {
  whoIndex++;
  if (whoIndex >= who.length) { whoIndex = 0; }
  whoChoice.textContent = who[whoIndex];
}

function nextWhat() {
  whatIndex++;
  if (whatIndex >= what.length) { whatIndex = 0; }
  whatChoice.textContent = what[whatIndex];
}

function nextWhere() {
  whereIndex++;
  if (whereIndex >= wherePlace.length) { whereIndex = 0; }
  whereChoice.textContent = wherePlace[whereIndex];
}

function nextWhen() {
  whenIndex++;
  if (whenIndex >= whenTime.length) { whenIndex = 0; }
  whenChoice.textContent = whenTime[whenIndex];
}

function nextWhy() {
  whyIndex++;
  if (whyIndex >= whyReason.length) { whyIndex = 0; }
  whyChoice.textContent = whyReason[whyIndex];
}
// this function show the full story
function showStory() {
  let sentence = who[whoIndex] + " " + what[whatIndex] + " " + wherePlace[whereIndex] + " " + whenTime[whenIndex] + " " + whyReason[whyIndex] + ".";
  storyOutput.textContent = sentence;
}
// this function let the user for the random story button
function randomStory() {
  whoIndex = Math.floor(Math.random() * who.length);
  whatIndex = Math.floor(Math.random() * what.length);
  whereIndex = Math.floor(Math.random() * wherePlace.length);
  whenIndex = Math.floor(Math.random() * whenTime.length);
  whyIndex = Math.floor(Math.random() * whyReason.length);

  whoChoice.textContent = who[whoIndex];
  whatChoice.textContent = what[whatIndex];
  whereChoice.textContent = wherePlace[whereIndex];
  whenChoice.textContent = whenTime[whenIndex];
  whyChoice.textContent = whyReason[whyIndex];

  showStory();
}
// this function is to reset the story and this buttons clears everything
function resetStory() {
  whoIndex = 0;
  whatIndex = 0;
  whereIndex = 0;
  whenIndex = 0;
  whyIndex = 0;

  whoChoice.textContent = "";
  whatChoice.textContent = "";
  whereChoice.textContent = "";
  whenChoice.textContent = "";
  whyChoice.textContent = "";
  storyOutput.textContent = "";
}
// this connects the buttons to the functions
document.getElementById("whoBtn").onclick = nextWho;
document.getElementById("whatBtn").onclick = nextWhat;
document.getElementById("whereBtn").onclick = nextWhere;
document.getElementById("whenBtn").onclick = nextWhen;
document.getElementById("whyBtn").onclick = nextWhy;

document.getElementById("showStoryBtn").onclick = showStory;
document.getElementById("randomStoryBtn").onclick = randomStory;
document.getElementById("resetBtn").onclick = resetStory;
