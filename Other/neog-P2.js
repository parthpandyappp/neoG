var rs = require('readline-sync')
const chalk = require('chalk');

//Welcome & Greet User
var name = rs.question(chalk.bold.rgb(255,174,66)("š”ļø  Yoddha's Name š”ļø  : "))
console.log(chalk.bold.rgb(255,174,6)("\n---------------------------------------------------------------------"))
console.log(chalk.bold.rgb(255,174,66)("\t\t\t\tš”ļø  Yoddha "+name+", Welcome to Baahubali Trivia Quiz š”ļø"));
console.log(chalk.bold.rgb(255,174,6)("---------------------------------------------------------------------"))

//Display General Instructions
console.log(chalk.bold.rgb(0,0,255)("---------------------------------------------------------------------"))
console.log(chalk.bold.rgb(0,0,255).bgBlackBright("General Instructions to be followed are as follows: "))

var medals = 0;

var inst = {
  a : "You will be presented with a set of 5 quizlet fires having 3 options each āļø",
  b : "If you answer a question correct, you'll be rewarded 5 medals & if you fail to do so then 2 medals will be snatched away from you. So, be sure! āļø",
  c : "Best of Luck, for this amazing trivia āļø"
}

var arr = [inst]
for (var i=0; i<arr.length; i++)
{
  var current = arr[i]
  console.log(chalk.bold.rgb(0,0,255).bgBlackBright("(a) "+current.a)+"\n")
  console.log(chalk.bold.rgb(0,0,255).bgBlackBright("(b)" +current.b)+"\n")
  console.log(chalk.bold.rgb(0,0,255).bgBlackBright("(c) "+current.c))
}
console.log(chalk.bold.rgb(0,0,255)("---------------------------------------------------------------------\n"))
console.log(chalk.bold.rgb(255,223,0)("---------------------------------------------------------------------\n"))
console.log(chalk.bold.rgb(255,223,0)("\t\t\t\t\tš  Let the hunt for medals šļø   begin  š\n"));
console.log(chalk.bold.rgb(255,223,0)("---------------------------------------------------------------------\n"))

//Actual quiz begins

//quizlet key-value pairs in an array
var quizlet = [
  {
    question : "Baahubali is originated from which kingdom?",
    a : "Satvahana",
    b : "Mahishmati",
    c : "Kunthala",
    ans :"b",
  },
  {
    question : "Complete this dialogues from the film, ā Aurat par haath daalne vale ki ungliyaan nahi kaat tey, Kaat tey hai toh unka ____.",
    a : "Sir",
    b : "Gala",
    c : "Gardan",
    ans : "b",
  },
  {
    question : "Name the sword that Sheikh Alam Khan tries to sell Kattappa",
    a : "Shamsher",
    b : "Sikandar",
    c : "La-Ula-bakhter-e-sword",
    ans : "a",
  },
  {
    question : "What is the symbol used on Amrendra Baahubaliās armour?",
    a : "horse",
    b : "elephant",
    c : "pig",
    ans : "a",
  },
  {
    question : "How many months pregnant was Baahubaliās mom when his dad Vikramdeva passed away?",
    a : "1.7 months",
    b : "3.5 months",
    c : "2.6 months",
    ans : "c",
  },
]

//throw questions one by one
for( var i=0; i<quizlet.length;i++)
{
  var current = quizlet[i];
  console.log(chalk.rgb(146, 168, 209)("Q."+ (i+1) + " " + current.question))
  console.log(chalk.rgb(238,130,238)("(a). " + current.a))
  console.log(chalk.rgb(238,130,238)("(b). " + current.b))
  console.log(chalk.rgb(238,130,238)("(c). " + current.c))
  var res = rs.question(chalk.rgb(195, 68, 122)("Your Uttar (select any one option): "))

  if(res==current.ans)
  {
    console.log(chalk.rgb(0, 255, 0)("Hail Mahishmati Samrajya! Victory!  š"))
    medals = medals+5;
    console.log(chalk.rgb(0, 255, 0)("Medals collected so far : ",medals,"šļø"))
  }

  else if(!(res=='a'||res=='b'||res=='c'||res=='d'))
  {
    console.log(chalk.rgb(255,0,0)("You didn't made it through, thereby snatching 2 medals  š"))

    medals = medals-2

    console.log(chalk.rgb(0, 255, 0)("Medals collected so far : ",medals,"  šļø"))
  }

  else
  {
    console.log(chalk.rgb(255,0,0)("You didn't made it through, thereby snatching 2 medalss  š"))
    
    medals = medals-2

    console.log(chalk.rgb(0, 255, 0)("Medals collected so far : ",medals," šļø"))
  }
  console.log("\n")
}

console.log(chalk.bold.rgb(255,223,0)("---------------------------------------------------------------------\n"))
console.log(chalk.bold.rgb(255,223,0)("\t\t\t\t\tš®  Yuddh Samapt [Game Over] š®\n"));

console.log(chalk.rgb(0, 255, 0)("Total Medals Collected : ",medals,"šļø"))
console.log(chalk.rgb(0, 255, 0)("Jay Mahishmati š"))

console.log(chalk.bold.rgb(255,223,0)("---------------------------------------------------------------------\n"))
