"use strict";
const employeeData = {
    Employeeid: 123, name: "Bod Marle", retire: (date) => {
        console.log(date);
    }
};
console.log(employeeData);
function studentsData(rollno) {
    if (typeof rollno === "number") {
        return rollno + 2;
    }
    else {
        return parseInt(rollno) - 2;
    }
}
console.log(studentsData(12));
console.log(studentsData("12"));
//# sourceMappingURL=section2_1.js.map