// Simulating Asynchronous Behavior
function simulateAsyncTask() {
    console.log("task started")
    setTimeout(()=>{
        console.log('task finished')
    },2000)
}

// Simulate Multiple Async Tasks with Different Delays
function simulateMultipleAsyncTasks() {
    console.log("Task started");
    for(let i=1;i<=3;i++)
    {
        setTimeout(()=>{
            console.log(`Task ${i} finished`)
        },i*1000)
    }
}

//  Async Task with Callback Function
function fetchDataWithCallback(callback) {
    setTimeout(()=> {
        const data = "fetched data"
        callback(data)
    },2000)
}

function handleData(data) {
    console.log("Data recieved")
    console.log("Data : ", data)
}

// Creating a Counter Using Closures

function createCounter() {
    let cnt = 0;
    return ()=> {
        return ++cnt
    }
}

let counter = createCounter()
// console.log(counter())
// console.log(counter())
// console.log(counter())

//  Rate Limiter Function

function rateLimit(fn,limit) {
    let lastCalled = 0;

    return function (...args) {
        let now = Date.now();

        if(now-lastCalled < limit)
        {
            return `Rate Limit Exceed`;
        }
        else {
            lastCalled=now;
            return fn(...args)
        }
    }
}

function greet(...args) {
    for (let val of args) {
        console.log(`Hello , ${val}`);
    }
}

let limitedGreet = rateLimit(greet,3000);
// limitedGreet("Nahin","Sadika","Ronaldo");

// Memoization Function

function memoize(fn) {
    let cache = {}

    return function(...args) {
        const key = JSON.stringify(args)
        if(cache[key]) {
            console.log("Direct access")
            return cache[key]
        }
        else {
            let result = fn(...args)
            cache[key]=result
            return result
        }
    }
}

function area(length,width) {
    return `Area of Square : ${length*width}`
}

let memoizeSquareArea = memoize(area)

// console.log(memoizeSquareArea(5,10))
// console.log(memoizeSquareArea(4,8))
// console.log(memoizeSquareArea(5,10))


// Create Inheritance Using Prototypes
function Animal(){}
Animal.prototype.makeSound = function() {
    console.log("Animal making sound")
}
function Dog(){}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function() {
    console.log("Dog Barking")
}
let D = new Dog()
// D.bark()

// Shape and Rectangle Inheritance
function Shape(color) {
    this.color = color
}

Shape.prototype.getColor = function() {
    return`The color is ${this.color}`
}

function Rectangle(color,height,width){
    Shape.call(this,color)
    this.height = height
    this.width = width
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.getArea = function() {
    return `Area of rectangle : ${this.height*this.width}`
} 

let Calculate = new Rectangle("Blue",12,24)
// console.log(Calculate.height)
// console.log(Calculate.width)
// console.log(Calculate.getArea())

// Bind the Correct Context
let person = {
    name : "Nahin",
    introduce() {
        return `My name is ${this.name}`
    }
}
const fn = person.introduce.bind({name:"Nahin"})
// console.log(fn())


// Using call() to Invoke a Function with Different Contexts
function introduce(val) {
    return `My name is ${this.name} ${val}`
}
// console.log(introduce.call({name : "Nahin"},5))
// console.log(introduce.call({name : "Sadika"}))


// Using apply() to Pass Arguments with Context
function sum(a, b) {
  return (a + b) * this.multiplier;
}
// console.log(sum.apply({multiplier:2}, [5, 10]))


// Async-Await with Promise.all

function fetchUser() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("fetching user data ...")
        },2000)
    })
}
function fetchPosts() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("fetching post data ...")
        },2000)
    })
}

async function fetchAllData() {
    try {
        console.log("fetching . . . ")
        const [user,post] = await Promise.all([fetchUser(),fetchPosts()])
        console.log(user)
        console.log(post)
        console.log("fetching complete . . .")
    } catch (error) {
        console.log(Identified,error)
    }
}
// fetchAllData()

// Error Handling in Async/Await with Promise.all

function fetchSuccess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetched data success...");
    }, 1000);
  });
}
function fetchFailure() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("fetched data failed...");
    }, 1000);
  });
}

async function handlePromises() {
  try {
    console.log("fetching . . . ");
    const [success, failure] = await Promise.all([fetchSuccess(), fetchFailure()]);
    console.log(success);
    console.log("fetching complete . . .");
  } catch (error) {
    console.log("Identified : ", error);
  }
}
// handlePromises()

// Timeout with Async/Await and Promise.race

function fetchWithTimeout(promise1,promise2,timeout) {
    const error = new Promise((reject)=>{
        setTimeout(()=> {
            reject("Time limit exceed")
        },timeout)
    })
    return Promise.race([promise1,promise2,error])
}

function fetchData() {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("Data Fetched Successfully")
        },1000)
    })
}
function fetchPost() {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("Post Data Fetched Successfully")
        },500)
    })
}

// fetchWithTimeout(fetchData(),fetchPost(),3000)
//     .then(console.log)
//     .catch(console.log)


// Creating a Simple Generator

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let call = numberGenerator()
// console.log(call.next().value)
// console.log(call.next().value)
// console.log(call.next().value)

function* fibonacciGenerator()
{
    let a=1, b=1
    yield a
    yield b

    while(true)
    {
        let next = a+b
        a=b
        b=next
        yield next
    }
}

// Create a Custom Iterator

function rangeIterator(start,end) {
    let current = start

    return {
        next : function() {
            if(current<=end) {
                return {value : current++, done : false}
            }
            else {
                return {done : true}
            }
        }
    }
}

let Iterator = rangeIterator(1,5)

console.log(Iterator.next().value)
console.log(Iterator.next().value)
console.log(Iterator.next().value)
console.log(Iterator.next().value)
console.log(Iterator.next().value)
console.log(Iterator.next().value)