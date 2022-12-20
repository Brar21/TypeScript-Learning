//Literal types
//There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.

//The string literal type was added in TypeScript version 1.8. String literal types work well with union types and type aliases in practice. These properties can be combined to give strings enum-like functionality. The string literal type allows you to specify a set of possible string values for a variable, only those string values can be assigned to a variable. TypeScript throws a compile-time error if one tries to assign a value to the variable that isn’t defined by the string literal type.

//in simple we can use "Litrals" to limit our variables

// we going anotate Literal(exact,specific)
//let currancy :"CAN Dollar"|"Euro"| "Pond"="Dollar" //now we can use only given values other than that we gor complier error.

let currancy: "CAN Dollar" | "Euro" | "Pond" = "CAN Dollar" /*No error is coming now*/

//for make it dyanmic
type Notes = 5 | 10 | 20 | 50 | 100 | 500 | 2000;
let rupeeNotes: Notes = 500;
console.log(rupeeNotes)