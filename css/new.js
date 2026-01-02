
// setTimeout(()=>{
//     console.log("learning web development")
// },9000)

// const n = 24;
// let sq = (n)=> {
//     console.log(n*n);
// }

// sq(n);


// let i = 0;let id = setInterval(()=> {
//     console.log("Hello World");
// },2000)

// setTimeout(()=> {
//     clearInterval(id);
//     console.log("Done");
// } ,10000)

// let arr = [10,6,100,15,12,9]

// let arrayAverage = (a)=> {
//     let sum = a.reduce((total,value)=> total + value,0);
//     console.log(sum/a.length)
// }

// arrayAverage(arr)


// let isEven = (n) => {
//     if(n&1) return "odd";
//     else return "even"
// }

// console.log(isEven(10));


// const obj = {
//     msge : "Hello World",

//     logmsge() {
//         console.log(this.msge);
//     }
// }

// setTimeout(obj.logmsge,1000)


// let length=4
// function callback()
// {
//     console.log(this.length);
// }

// const obj = {
//     length : 5,
//     method(callback) {
//         callback();
//     }
// }

// obj.method(callback);

// let arr = [20,30,65,50]

// let multen = arr.every( el=> el%10==0 ) 

// console.log(multen)


// function getmin(arr)
// {
//     let min = arr.reduce((res, el) => {
//       if (el < res) return el;
//       else return res;
//     });

//     return min;
// }



// let max = arr.reduce((total,val)=> {
//     if (val > total) return val;
//     else return total;
// })

// console.log(getmin([2,5,1,0,-5]));
// console.log(max);

// console.log(..."apnacollege")

let arr = [100,10]

let str = ["steve","tony","bruce"]

let STR = str.map((word)=> word.toUpperCase())

let sq = arr.map((el)=> el*el);

let highfive = arr.map((el)=> el+5)

let sum = arr.reduce((res,el)=> res+el);

let avg = sum/arr.length

console.log(STR)


function doubleAndReturnArgs(arr,...arg)
{
    let newarr = [...arr,...arg.map((el)=>el*2)]
    return newarr; 
}

console.log(doubleAndReturnArgs(arr,151,375,282,447))


let ob1 = {
    name1 : "Nahin Ahmed",
    id1 : 22235103151 
}
let ob2 = {
    name2 : "Sadika Ahmed",
    id2 : 22235103375 
}

function mergeObjects(obj1, obj2) {
    let newobj = {...obj1,...obj2}
    return newobj;
}

console.log(mergeObjects(ob1,ob2))
