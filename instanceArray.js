/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

users = [];
  //code here


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

var u1 = new User("Tyler","tylermcginnis33@gmail.com","iLoveJS");
var u2 = new User("Cahlan","cahlan@devmounta.in","iLoveHashtags");
var u3 = new User("Lenny","lenny@theLenster.com","iLoveLentilSoup");

users.push(u1);
users.push(u2);
users.push(u3);

  //code here

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

console.log(users[0]);
  //code here

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

console.log(users[1]);

//Now create another instance of User using your own information and then add that to your users array.

var u4 = new User("Paul","paul.j.berrett@gmail.com","StrongMan");
users.push(u4);
  //code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 
for(var i=0;i<users.length;i++){
  console.log(users[i].name);
}
