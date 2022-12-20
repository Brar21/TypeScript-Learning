//Optional changings

type Car = {
    seat: number,
    buyDate:Date
}

function newCar(id: number): Car | null | undefined
{
    return id === 0 ? null : { buyDate: new Date(),seat: 4 };
}
let car = newCar(1);
console.log(car)
let taxi = newCar(1);//===1 then we get actual output
//if (taxi !== null && taxi !== undefined)
//{
//    console.log(taxi.buyDate,taxi.seat)
//}
//else
//{
//    console.log("we can't buy this.")
//}

// use of Optional property access operators
console.log(taxi?.buyDate.getFullYear(),taxi?.seat) //for print full year you can use "getFullYear()"