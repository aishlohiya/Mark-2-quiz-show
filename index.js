var readlineSync = require('readline-sync');

var score = 0
var intro = readlineSync.question("Hey! What's your name? ");
console.log("Welcome to the game of fake or not fake "+ intro)
console.log("------------------");
console.log("Make sure that all the answers are in small letters only i.e 'fake' or 'notfake' ");

function play(question, answer){
  var quiz = readlineSync.question(question)
  if (quiz === answer){
    console.log("You are right")
    score = score + 1
  } else {
    console.log("You are wrong")
    score = score - 1
  }
  console.log("Your score is: " + score)
}

var questions = [
  {
    question: "Aamir Khan has dubbed for a dog's voice? ",
  answer: "notfake"
  },
  {
    question: "Watermelons are scientifically classified as vegetables? ",
    answer: "fake"
  },
  {
    question: "Hardik Pandya dons his highest individual score of 228 as his sport jersey? ",
    answer: "notfake"
  },
  {
    question: "The official language of Kerela is Kannada? ",
    answer: "fake"
  },
  {
    question: "Goats have rectangular pupils giving them peripheral vision? ",
    answer: "notfake"
  }
]

for ( var i=0; i<questions.length; i++){
  var quizShow = questions[i]
  play(quizShow.question, quizShow.answer)
}

console.log("----------------")
console.log("Highest score is 4")

console.log("If you think you have beaten the highest score, do ping me ")

