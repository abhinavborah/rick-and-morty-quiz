var readlineSync=require('readline-sync');
var chalk=require('chalk');

var score=0;

// function to capitalise

function capitalise(str){
  var word = str.charAt(0).toUpperCase()+str.slice(1);
  return word;
}

// function to play
function play(que, ans){
  var userAnswer=readlineSync.question(que);
  if(capitalise(userAnswer)===ans){
    console.log(chalk.green("You are correct!\n"));
    score++
  }
  else{
    console.log(chalk.red("You are wrong!\n"));
  }
  
}

// User name entry
var userName=readlineSync.question(chalk.yellow("Please enter your name: "));
console.log('Greetings ' +chalk.blue.bgWhite.bold(capitalise(userName))+ ', Welcome to the Rick and Morty quiz!');

// Initiating game message
console.log(chalk.red.bgWhite.bold("\nLet the quiz begin!\n"));

// question array
var questions=[{
  question:"Complete the name of the show: Rick and ____.  ",
  answer:"Morty",
}, {
  question:"What is Rick's surname? ",
  answer:"Sanchez",
}, {
  question:"Who is Morty's sister? ",
  answer:"Summer",
}, {
  question:"What does Rick use to travel between dimensions and universes? ",
  answer:"Portal gun",
}, {
  question:"How old is Morty? ",
  answer:"14",
}, {
  question:"Who is Morty's father? ",
  answer:"Jerry",
}, {
  question:"Who is Rick's daughter? ",
  answer:"Beth",
}, {
  question:"What season of the show will be released soon? (Choose from 1-10) ",
  answer:"5",
}, {
  question:"What pet animal did the Smith Family have? ",
  answer:"Dog",
}, {
  question:"Who is Morty's crush? ",
  answer:"Jessica",
}]

// loop for serving questions
for(var i=0;i<questions.length;i++){
  play(questions[i].question, questions[i].answer);
}

if(score<=3){
  console.log(chalk.red("\nYou barely watch the show.\n"));
}
else if(score<=6){
  console.log(chalk.orange("\nYou casually watch the show.\n"));
}
else if(score<=9){
  console.log(chalk.yellow("\nYou enjoy the show!\n"));
}
else{
  console.log(chalk.blue.bgRed.bold("\nYou got all the answers correct! Take a screenshot and send it to the creator of the quiz!\n"));
}

// score
console.log("\n"+chalk.red.bgWhite.bold(capitalise(userName))+", your total score is: "+ chalk.blue(score));