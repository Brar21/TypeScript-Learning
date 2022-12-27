//Functions

//function print(a:number,b:number):number{ //return type
//  return a+b
//}
//console.log(print(1,1))

function defaultParmeter(value: number,valueDouble: number):number
{
    return value**valueDouble
}
let x = defaultParmeter(5,5)
console.log(x)