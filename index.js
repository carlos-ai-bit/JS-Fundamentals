// Variable Declaration
// let firstName = "John"
// let secondName = "Opiyo"
// let age = 20;
// let isStudent = true
// let fruit = ["Apple", "Mango", "Banana", "Orange"]

// let person = {
//     name: "Joy",
//     age: 30,
//     isStudent: true
// }
// console.log(typeof firstName);
// console.log(age++)
// let num1 = 20
// let num2 = 5

// console.log(num1 + num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)
// console.log(num1 - num2)

// {
// Compasison Operator
// == 	equals to~ returns true if 2 values are equal
// let x = 6
// let y = 5
// console.log(x == y)
//  === 	equal value and equal type
// console.log(x === y)

// != 	not equal-returns true
// console.log(x != y)

// !== 	not equal value or not equal type
// console.log(x !== y)

// > 	greater than~ returns true if first value is greater than 2nd value
// console.log(x > y)

// < 	less than
// console.log(x < y)

// >= 	greater than or equal to
// console.log(x >= y)

// <= 	less than or equal to
// console.log(x <= y)

// }

// let width = 20
// let length = 50
// let area = width * length
// console.log(width * length)

// let base = 5
// let height = 10
// let trianglearea = base * height
// console.log(1 / 2 * base * height)

// const Person1Age = 25;
// const Person2Age = 30;
// if (Person1Age > Person2Age) {
//     console.log("Person 1 is older than Person 2");
// } else if (Person2Age > Person1Age) {
//     console.log("Person 2 is older than Person 1");
// } else {
//     console.log("Person 1 is older than Person 2");
// }

// for loop -- typically used,how many you want to repeat a block of codes.

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// while loop -- used when repeating a block of code when a certain condition is true.
// let i = 2;
// while (i <= 10) {
//     console.log(i)
//     i += 2
// }

// do while -- executes block of code atleast once before checking the condition
// let i =1;
// do{
//     console.log(i)
//     i++
// }while(i<=5);

// Switch Statement is a control flow statement that allows to test a value against a sries of cases and execute different code blocks depending on the value
// let dayOfWeek = "Monday"
// switch (dayOfWeek) {
//     case "Monday":
//         console.log("It's Monday")
//         break

//     case "Tuesday":
//         console.log("It's Tuesday")
//         break
//     case "Wednesday":
//         console.log("It's Wednesday")
//         break
//     case "Thursday":
//         console.log("It's Thursday")
//         break
//     case "Friday":
//         console.log("It's Friday")
//         break
//     case "It's Weekend":
//         console.log("It's It's Weekend")
//         break
//     default: console.log("It's Weekend")
// }

// let numericalGrade = prompt("Enter yor grade(0-100)");
// let letterGrade;

// switch (true) {
//     case numericalGrade >= 90:
//         letterGrade = "A"
//         break
//     case numericalGrade >= 80:
//         letterGrade = "B"
//         break
//     case numericalGrade >= 70:
//         letterGrade = "C"
//         break
//     case numericalGrade >= 60:
//         letterGrade = "D"
//         break
//     default:
//         letterGrade = "E"}

//         console.log(letterGrade)

//Function
// function sum (){
//     console.log("Hello World")
// }
// sum()

// function addNumbers() {
//     let num1 = 5
//     let num2 = 6
//     let sum = num1 + num2

//     console.log("The sum is:" + sum)
// }
// addNumbers()

// function SubtractNumbers() {
//     let num1 = 9
//     let num2 = 6
//     let result = num1 - num2

//     console.log("The difference is:" + result)
// }
// SubtractNumbers()

// function ProductNumbers() {
//     let num1 = 9
//     let num2 = 6
//     let result = num1 * num2

//     console.log("The Product is:" + result)
// }
// ProductNumbers()

// function DivNumbers() {
//     let num1 = 9
//     let num2 = 6
//     let result = num1 / num2

//     console.log("The Div is:" + result)
// }
// DivNumbers()

// let greet_one = "Hello"
// let greet_two = "World"
// console.log(greet_one)
// setTimeout(function () {
//     console.log("Asyncronous");
// }, 10)
// console.log(greet_two)

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name
//     }
// }
// let john = new Person("John Doe");
// let name = john.getName();
// console.log(name);
// function pen(name, color, price) {
//     this.name = name;
//     this.color = color;
//     this.price = price;
// }
// const pen1 = new pen("marker", "black", "100sh")
// console.log(pen1)

// class car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
//     start() {
//         console.log(`starting ${this.make} ${this.model}`);
//     }
//     stop() {
//         console.log(`stopping ${this.make} ${this.model}`);
//     }
// }
// // function mycar(model, name) {
// //     this.model = model;
// //     this.name = name;
// // }
// const mycar = new car("Toyota", "Corola");
// console.log(mycar);
// mycar.start()
// mycar.stop()

class vehicle {
    constructor(make, model, year,) {
        this.make = make
        this.model = model
        this.year = year
    }
    start() {
        console.log(`starting ${this.make} ${this.model} ${this.year}`)
    }
    stop() {
        console.log(`stopping ${this.make} ${this.model} ${this.year}`)
    }

}
const myvehicle = new vehicle("Toyota", "Corolla", "2010");
console.log(myvehicle);
myvehicle.start()
myvehicle.stop()

class car extends vehicle {
    constructor(make, model, year, numDoors, drive) {
        super(make, model, year,);
        this.numDoors = numDoors
        this.drive = drive
    }
    driveOffRoad() {
        console.log(`The Car has been driven ${this.make} ${this.model} ${this.year} off-road`)
    }
}
const mycar = new car("Isuzu", "Max", "2018", "5", "The Car has been driven")
console.log(mycar)
mycar.start()
mycar.stop()


class motorcycle extends vehicle {
    constructor(make, model, year, numDoors, drive, numWheels) {
        super(make, model, year, numDoors, drive);
        this.numWheels = numWheels
    }
}
const mymotorcycle = new motorcycle("Honda", "c-16", "2019", "0", "The motorbike has been driven", "2")
console.log(mymotorcycle)
mymotorcycle.start()
mymotorcycle.stop()
