//Interfaces or type aliases

//An Interface is a structure which acts as a contract in our application. It defines the syntax for classes to follow, means a class which implements an interface is bound to implement all its members.
type DataProps={
    name: string,
    id:number
}

interface Datastored
{
    isEasylearn: boolean,
    fullcourse: string,
    price:number
    
}
interface isFree extends Datastored
{
    isfree: boolean;
    anyCopun:boolean
}

var obj: DataProps | Datastored= {
    name: "typescript",
    id: 1,
    isEasylearn: true,
    fullcourse: "typescript in hindi",
    price: 299,
    
}
var objDetails: isFree = {
    isfree: false,
    anyCopun: true,
    isEasylearn: true,
    fullcourse: "typescript in hindi",
    price: 299,
    
}

console.log(obj)
console.log(objDetails)
