//Objects
//TypeScript has a specific syntax for typing objects.

//Type Inference
//TypeScript can infer the types of properties based on their values.
//in venilla javascript object are dyanmics  like:

let details = {
    course: "Typescript",
    level: "Basic",
    Viewtime: "4 hours",
    students: 50,
    Price: 199
}
//details.creator = 'Varinder';
//"Property 'creator' does not exist on type '{ course: string; level: string; Viewtime: string; students: number; Price: number; }'. you see if hover on details.creator"

//Example

let detail: {
    course: string;
    level: string;
    Viewtime: string;
    students: number;
  readonly  Price: number;
    creator:string
} = {
    course: "Typescript",
    level: "Basic",
    Viewtime: "4 hours",
    students: 50,
    Price: 199,
    creator:"varinder"
}
//detail.Price = 499;
// now error occur here becasue we can't price we can only read.
console.log(detail)
//detail.creator = 'Varinder'; now we don;t need this.
//now  if we make it optional error will gone but this is not good practice.
// how we can make value constent for stoppin unwanted changes "readonly" will here there let see.


//Optional Properties
//Optional properties are properties that don't have to be defined in the object definition.

let detailData: {
    course: string;
    level: string;
    Viewtime: string;
    students: number;
   Price: number;
    creator: string;
    youtubeVideo ?:boolean
} = {
    course: "Typescript",
    level: "Basic",
    Viewtime: "4 hours",
    students: 50,
    Price: 199,
    creator:"varinder"
}
detailData.youtubeVideo = true;
console.log(detailData);


//Index Signatures
//Index signatures can be used for objects without a defined list of properties.

const Agegap: { [index: string]: number } = {};
Agegap.Jack = 25; // no error
Agegap.Mark = 24 //"Fifty"; //Type 'string' is not assignable to type 'number'.

console.log(Agegap)

//Retire function implementation
const employee :{
    readonly Employeeid: number,
    name: string,
    retire:(date:Date)=> void
} = {
    Employeeid: 123,name: "Bod Marle",retire: (date: Date) =>
    {
        console.log(date)
 }  
}
console.log(employee)