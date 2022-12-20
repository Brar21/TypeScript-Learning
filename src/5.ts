//Functions

//TypeScript has a specific syntax for typing function parameters and return values.

//*Return Type*//
//The type of the value returned by the function can be explicitly defined.
//If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

function printClass(classtype: string,duration:string): string
{
    // declare a vaiable inside functions that is called "unUsedLocals". for checking is any unUsedlocal is present in our code follow "README.md " instructions.
    //let courseName = "Basics of Typescript(TSC)"; //'courseName' is declared but its value is never read. is coming after uncommetn the file "unUsedLoacals":true.
    if (classtype === "B.tech")
    {
        return classtype + " " + "Done. how get skills now?"    
    }
    if (duration === "4yrs")
    {
        return duration + " " + "Graduation in done."
    }
    return classtype + " " + "Check online learning Platforms."
    
}
console.log(printClass("B.tech","4yrs"))// we call function than just pass those arguments which we pass eraler not more than that if you try to do that you got error.
//also you can't just pass one argument. for pass one we need make changes as shown Below:

//function printClasss(classtype: string, duration=4): string
//{
  
//    if ((duration || 4) < 3)
//      {
//        return classtype + " " + "Done. how get skills now?"    

       
//    }
//    return classtype + " " + "Check online learning Platforms."

//    if (duration < 3)
//    {
//      return classtype + " " + "Done. how get skills now?"    

     
//  }
//  return classtype + " " + "Check online learning Platforms."
    
//}
//printClasss("B.tech") // we can pass with to manners now
 
    //now you can see error when hoveer on function name "Not all code paths return a value."

    //but after written this get an error in return value as mention forword = "Function lacks ending return statement and return type does not include 'undefined'."
    //If we remove return type than error will gone but still this bugg in our apllication or function. But we have one more setting  check "README.md" for know what is that?


//In this example you can see if you hocer on function name return type is "String".
//you always annotate the return value also as you see in upper example.

//Benifits of annotate return value:
//1. If you forget to return it will show error.
//2. If you return wrong value than you got an error.



/*Void Return Type*/
//The type void can be used to indicate a function doesn't return any value.

//function printName(income:number)
//{
    
//}
//hover pointer on function name then you can see return type void means this function return nothing.

//Best practice of coding always properly Anotate your code or functions. Speacially, when others are using your code.