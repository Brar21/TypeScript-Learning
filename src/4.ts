// Enums
//An enum is a special "class" that represents a group of constants (unchangeable variables).

//Enums come in two flavors string and numeric. Lets start with numeric.

//In simpile javascript we assigned value like this 
const Starting = 1;
const Middle = 2;
const Large = 3;

//In typescript instead assign value to variables like shown uppword we use Enum
 // it  should be written in PascalCase means- fist letter should br "Capital" :
 
 //Example

enum Intials { Starting = 1,Middle,Large }; //by default typescript assign values- 0,1,2....N as length of enums but we can set our on value which can be "number" or "string";
let myIntials: Intials = Intials.Middle;
console.log(myIntials)


//How to optimize our code let see Example

const enum Intial { Starting = 1,Middle,Large }; //by default typescript assign values- 0,1,2....N as length of enums but we can set our on value which can be "number" or "string";
let myIntial: Intial = Intial.Middle;
console.log(myIntials)
