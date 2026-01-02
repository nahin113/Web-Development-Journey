// class Person {
//     constructor(Name,ID,Age,Department)
//     {
//         this.Name=Name;
//         this.Id=ID;
//         this.Age=Age;
//         this.Department=Department;
//     }

//     call() {
//         return `Calling ${this.Name} from ${this.Department} Department`
//     }
// }

// class Student extends Person {
//     info() {
//         return `${this.Name} from ${this.Department} Department got a job`;
//     }
// }

// let St1=new Student("Nahin Ahmed",'151',25,"CSE");

// console.log(St1.call());
// console.log(St1.info());


// making a constructor function and linking another constructor function by prototype chain
// function Animal () {}

// Animal.prototype.speak() = function () {
//     return "Animal Speaking"
// }

// function Dog () {}

// Dog.prototype = Object.create(Animal.prototype);  //inherit by linking the prototype

// Dog.prototype.bark = function () {
//     return "Woof";
// }

// Dog.prototype.constructor = Dog //demonstrating the prototype chain 

// Task 2
// function Person (name, age) {
//     if(age<0) {
//         throw new Error('Age can not be a negative number');
//     } 
//     this.name = name;
//     this.age = age;

//     this.greet = function() {
//         return `Hello, my name is ${this.name}`;
//     }
// };

// let nahin = new Person("Nahin Ahmed",-25);
// console.log(nahin.greet());

// Task3
// class Vehicle{
//     constructor(make,model) {
//         this.make=make;
//         this.model=model;
//     }

//     getDetails() {
//         return `${this.make},${this.model}`;
//     }

//     move() {
//         return "The vehicle is moving";
//     }

//     static isVehicle(obj) {
//         return obj instanceof Vehicle;
//     } 
// }

// class Car extends Vehicle {
//     startEngine() {
//         return `Engine started`;
//     }

//     move() {
//         return "The car is driving";
//     }
// }

// const Toyota = new Car("Toyota","317B");

// class BankAccount {
//     #_balance;
//     constructor(_balance) {
//         if(_balance<0) throw new Error("Balance can;t be negative");
//         this.#_balance=_balance;
//     }

//     deposit(amount) {
//         if(amount>0) {
//             this.#_balance+=amount;
//             return "Deposite Done"
//         }
//         else return "Amount can't be negative";
//     }

//     withdraw(amount)
//     {
//         if (amount > 0) {
//           this.#_balance -= amount;
//           return "Withdraw done"
//         } else return "Amount can't be negative";
//     }

//     get getBalance() {
//         return this.#_balance;
//     }

//     set setBalance(amount) {
//         if (amount > 0) {
//           this.#_balance=amount;
//         } else return "Balance can't be negative";
//     }
// }

// let Sonali = new BankAccount(5000);
// Sonali.setBalance = 10000;
// console.log(Sonali.withdraw(5000));
// console.log(Sonali.getBalance);

// class Shape {
//     area() {
//         return 0;
//     }
// }

// class Circle extends Shape {

//     constructor(radius=0) {
//         super();
//         this.radius=radius;
//     }

//     area() {
//         return Math.PI*this.radius*this.radius;
//     }
// }

// class Rectangle extends Shape {
//     constructor(length=0,width=0) {
//         super();
//         this.length=length;
//         this.width=width;
//     }
//     area() {
//         return this.length*this.width;
//     }
// }

// let C = new Circle(5);
// let R = new Rectangle();
// console.log(C.area());
// console.log(R.area());