//Nullvalues

//TypeScript has a powerful system to deal with null or undefined values.
//By default null and undefined handling is disabled,and can be enabled by setting strictNullChecks to true.


// 1. how we write code in venilla javascript example below

//function printWord(name)
//{
//    console.log(name.toUpperCase())
//}
//printWord(null) // this is valid code in Venilla javaascript

function printWord(name:string |null|undefined)
{
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("abhi kam krega");
}
printWord(null) /*in typescript this not right way to write code*/
printWord(undefined) 
// 2. where you can see that nullcheck is enable or disabled in you system. for that again check "README.md" file do step as write there.