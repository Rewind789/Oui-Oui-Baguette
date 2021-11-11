var timesClicked = 0;
var status = "";

function clickbutton(){
timesClicked++
document.getElementById("TimesClicked").innerHTML = timesClicked;
}

function checkStatus(){

if(timesClicked >= 1000000000){
status = "The END???";
changeStatus();
return;
}
if(timesClicked >= 3000000){
status = "There is no more universe. It's just you, clicking away for all eternity.";
changeStatus();
return;
}
if(timesClicked >= 2000000){
status = "After years of clicking, you finally ask yourself, what am I doing with my life? (Hint: Kneading Dough)";
changeStatus();
return;
}
if(timesClicked >= 1000000){
status = "You have finally ascended amongst the divine: you are the god of kneaded dough!";
changeStatus();
return;
}
if(timesClicked >= 800000){
status = "Generations from now will know of the tale of The One Who Kneaded dough";
changeStatus();
return;
}
if(timesClicked >= 625000){
status = "The dough factories are nearly gone now...";
changeStatus();
return;
}
if(timesClicked >= 550000){
status = "Your IQ: Bread";
changeStatus();
return;
}
if(timesClicked >= 500000){
status = "No-one has lived this long apart from dough kneaders.";
changeStatus();
return;
}
if(timesClicked >= 400000){
status = "The population is declining rapidly: everyone wants to do nothing except knead dough!";
changeStatus();
return;
}
if(timesClicked >= 300000){
status = "Civilisation doesn't exist anymore. All that is left are humans who knead dough.";
changeStatus();
return;
}
if(timesClicked >= 150000){
status = "You have become immortal; you don't even have time for death! (Only for kneading dough)";
changeStatus();
return;
}
if(timesClicked >= 100000){
status = "Society is slowly collapsing, as people are doing nothing except kneading dough.";
changeStatus();
return;
}
if(timesClicked >= 50000){
status = "Worldwide, people are protesting against work, saying: 'Bread Kneading is life!'";
changeStatus();
return;
}
if(timesClicked >= 42500){
status = "Every day have been replaced with: 'International Bread Kneading Day'.";
changeStatus();
return;
}
if(timesClicked >= 37500){
status = "All holidays have been replaced with: 'International Bread Kneading Day'.";
changeStatus();
return;
}
if(timesClicked >= 30000){
status = "Everyone on the streets are watching you now.";
changeStatus();
return;
}
if(timesClicked >= 20000){
status = "Doughnut companies have gone out of business because of you.";
changeStatus();
return;
}
if(timesClicked >= 15000){
status = "People are starting to believe you have special abilities.";
changeStatus();
return;
}
if(timesClicked >= 13000){
status = "Can't you do something else now?";
changeStatus();
return;
}
if(timesClicked >= 11000){
status = "Companies have nearly run out of dough because of you...";
changeStatus();
return;
}
if(timesClicked >= 9200){
status = "Status: GOD???";
changeStatus();
return;
}
if(timesClicked >= 9001){
status = "Your dough kneading is over the level!";
changeStatus();
return;
}
if(timesClicked >= 7500){
status = "Do you have anything else to do?";
changeStatus();
return;
}
if(timesClicked >= 5000){
status = "Conspiracy theories think you are some kind of dough kneading alien...";
changeStatus();
return;
}
if(timesClicked >= 4000){
status = "This bread is a hit around the world.";
changeStatus();
return;
}
if(timesClicked >= 3000){
status = "You are famous for your dough kneading skills.";
changeStatus();
return;
}
if(timesClicked >= 2225){
status = "Can you speak french fluently?";
changeStatus();
return;
}
if(timesClicked >= 1500){
status = "You should startup your own bread business!";
changeStatus();
return;
}
if(timesClicked >= 1000){
status = "You must be tired!";
changeStatus();
return;
}
if(timesClicked >= 820){
status = "How do you have this much time???";
changeStatus();
return;
}
if(timesClicked >= 575){
status = "Keep on practicing.";
changeStatus();
return;
}
if(timesClicked >= 300){
status = "Still a lot of room for improvement";
changeStatus();
return;
}
if(timesClicked >= 150){
status = "Knead it like you mean it!";
changeStatus();
return;
}
if(timesClicked >= 75){
status = "Keep that rhythm";
changeStatus();
return;
}
if(timesClicked >= 25){
status = "Hmm... Getting Stronger...";
changeStatus();
return;
}
if(timesClicked >= 0){
status = "Do you even have any muscles?";
changeStatus();
return;
}
if(timesClicked <= 0){
status = "Get those hands moving and knead that bread!";
changeStatus();
return;
}
}
function changeStatus(){
document.getElementById("statusText").innerHTML = status;
}

function saveChanges() {
var value = document.getElementById("TimesClicked").innerHTML;
if(!value){
console.log('Error: No value specified');
return;
}
localStorage["timeclickie"] = value;
console.log(localStorage["timeclickie"])

checkStatus();
}


//Sameer is a bundle of sticks
document.addEventListener('DOMContentLoaded', function () {
document.querySelector('button').addEventListener('click', clickbutton);
document.querySelector('button').addEventListener('click', saveChanges);
if(!localStorage["timeclickie"]){
localStorage["timeclickie"] = 0;
}
timesClicked = localStorage["timeclickie"];
document.getElementById("TimesClicked").innerHTML = timesClicked;
checkStatus();
});