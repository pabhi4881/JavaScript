//Declaring Variable
var a= 10;
let b=5;
console.log(a, b); //it'll print 10 5
⭐ /*In JS a variable can be declared by both var and let keywords
      but var use for globel declaration whether let use for block level 
      declaration*/

//Declaring Constant
const c= 9; 
console.log(c); //it'll print 9

⭐ //var can be update and also it can re-declared
var a = 5; // re-declaration of a
a= 4; //updation of a
console.log(a); //it will print 4

⭐ //let can be update but can't re-declared
b = 7; //updation of b
console.log(b); //it'll print 7
let b = 6; //it'll throw error because let can't re-declared
