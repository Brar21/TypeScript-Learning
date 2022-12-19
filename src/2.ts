// Arrays
let numbers = [1,2,3,"45"] //we make array in venilla javascript as this and also we can enter string in array this i valid code. but

//How we declare array in Typescript

//let array:number[]= [1,2,3,"45"] //it show error on string number because we clear that its number array.

//another Example
let array:number[] = [] //if we hover on array we get type=any

array[0] = 1;
array[1] = 2;
//array[2]="3"   //no error will come until we not define that this array has type = number;after written like let array:number[]=[] we got error in this line.

//valueble thing in Typescript you can see with net line code:

array.forEach(n => n.valueOf)
 //after n. you diffrent method we can use which never you can see in simple Javascript.