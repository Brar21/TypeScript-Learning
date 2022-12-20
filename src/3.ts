//tuples araays
//A tuple is a typed array with a pre-defined length and types for each index.

//Tuples are great because they allow each element in the array to be a known type of value.

//To define a tuple, specify the type of each element in the array:

let user: [number,string] = [1,'mosh'] //this is correct way to write no error will come.

user[1] //just put '.' and all method will you can use.

user.push(1); //one thing is not fixed in Typescript as we know tuple are pre-defined length but still you can push and not any error will while write push code.
//but if you try to "push" on particluer position then you see error.
//let user1: [number,string,boolean] = [1,true,"yes"]
//in line number 9. you can seee a error in index[1] or index[2]


//Readonly Tuple
//A good practice is to make your tuple readonly.

//Tuples only have strongly defined types for the initial values:

let tuple: [string,string,boolean,number];
tuple=["Typescript Tutorial","Vaarinder Brar",true,1]