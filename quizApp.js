//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

var User = function(name, email, pw, totalScore){
  this.name = name;
  this.email = email;
  this.pw = pw;
  this.totalScore = totalScore;
};
  //code here


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters
var Question = function(title, answersArray, rightAnswer, difficulty){
    this.title = title;
    this.answersArray = answersArray;
    this.rightAnswer= rightAnswer;
    this.difficulty = difficulty;
};
  //code here


//Create a users Array which is going to hold all of our users.
users = [];
  //code here


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

var u1 = new User('pj', 'pj@strong.com', 'nottelling',3);
var u2 = new User('paul', 'paul@strong.com', 'nottellingyou', 3);
var u3 = new User('james', 'james@strong.com', 'nottellingme', 63);

users.push(u1);
users.push(u2);
users.push(u3);


//Create a questions Array which is going to hold all of our questions

questions = [];
  //code here


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var q1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', [1,2,3], 't' , 7);
var q2 = new Question('T/F: JavaScript is just a scripting version of Java', [1,2,3], 'f' , 8);
var q3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", [1,2,3], 't' , 7);

  //code here


//Now push all of your instances of Question into the questions Array
questions.push(q1);
questions.push(q2);
questions.push(q3);
  //code here

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.
console.log("\nUsers array = ");
for(var i=0; i<users.length;i++){
    console.log("\n",users[i]);
}

console.log("\nQuestions array = ");
for(var i=0; i<questions.length;i++){
    console.log("\n",questions[i]);
}
