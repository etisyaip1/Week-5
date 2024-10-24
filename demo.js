
//functional programming treat functions as values (data type)

const car = {
    location: 1000,
    speed: 10,
    drive: (car) => car.location += car.speed
};

console.log(car.location) //before
car.drive(car)
car.drive(car)
car.drive(car)
console.log(car.location) //after

//WHAT IS += DOING? INCREASING THE VALUE ON
let location = 100
let speed = 10

console.log("LOCATION BEFORE:" , location)
location += speed // short for location = (location + speed)
location += speed // short for location = (location + speed)
location += speed // short for location = (location + speed)
console.log("LOCATION AFTER:" , location)
