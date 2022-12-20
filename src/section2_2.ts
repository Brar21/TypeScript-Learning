//Intersections Types

//An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. For example, Person & Serializable & Loggable is a type which is all of Person and Serializable and Loggable .

//let mobileNumber: number & string;
//this statement means mobileNumber is "number" and same time it is string which is technicaly impossible.

type Dragable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

//for use both we make another type
type UIweight = Dragable & Resizable;
let testCase: UIweight = {
    drag: () => { },
    resize:()=>{}
}

//coding example of this

interface students
{
    student_id: number;
    name: string;
}


interface teachers
{
    teacher_id: number;
    teacher_name: string;
}

type intersected_type = students & teachers;
let obj: intersected_type = {
    student_id: 123,
    name: "rahul",
    teacher_id: 147,
    teacher_name: "Ritu"
};
console.log(obj.teacher_name,obj.name);