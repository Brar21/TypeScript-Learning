//console.log("hello world");
//var Names: string = "Typescript-Learning";
//console.log(Names)
//ENUM
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric. Lets start with numeric.
//Example of Numeric Enum :
//enum intialization
//{
//    start=2,
//    center,
//    end
//}
//var myENum:intialization=intialization.center
//console.log(myENum)
//by default it will take value start from 0...
//Example od string Enum:
var StringEnum;
(function (StringEnum) {
    StringEnum["starting"] = "starting";
    StringEnum["ending"] = "ending";
})(StringEnum || (StringEnum = {}));
var myStringEnum = StringEnum.starting;
console.log(myStringEnum);
