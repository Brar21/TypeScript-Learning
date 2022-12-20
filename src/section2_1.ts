type Employee = 
{
    readonly Employeeid: number,
    name: string,
    retire:(date:Date)=> void 
}

const employeeData = {
    Employeeid: 123,name: "Bod Marle",retire: (date: Date) =>
    {
        console.log(date)
 }  
}
console.log(employeeData)

//Problems we face if we create new employee data

// 1. for create new employee data we need repeat this code again which is not good.
// 2. Every employee may have diffrent properties but our object have a consistent shap.
// 3. Overall little bit hard to understand code.
 // for this you can use coustom types.
 // Benfit of custom type you can use at diffrent areas.

 // example for more understanding "Narrowing"

function studentsData(rollno: string | number):number
{
    if (typeof rollno === "number")
    {
        return rollno + 2;
    } else
    {
        return parseInt(rollno)-2
    }
}
console.log(studentsData(12))
 console.log(studentsData("12"))