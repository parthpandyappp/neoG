 var readlineSync = require('readline-sync');

  var score = 0;
var readName = readlineSync.question('Your name please? ');
console.log('\nWelcome '+readName+", let's comprehend how much do you know Parth! \n");

 function quiz (question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log('You are right');
    score++;
    console.log("Score : ",score, "\n")

  } else {
    console.log('You are wrong '+'the right answer is '+ answer);
    score--;
    console.log("Score : ",score, "\n")

  }
  }

  var question = [ {
    question: "What is my fav programming language? ",
    answer: "Python",
  },{
    question: "Which programming language did I learned first? ",
    answer: "C++",
  },{
    question: "What am I learning these days? ",
    answer: "NodeJS",
  },{
    question: "What is my Age? ",
    answer: "18",
  }, {
    question: "Which state I belong to? ",
    answer: "Gujarat",
  },
  ]

  for (var i= 0 ; i < question.length; i++ ){
  var currentQuestion = question[i];
  quiz(currentQuestion.question,currentQuestion.answer)
}



console.log('Your final score is ' + score)

