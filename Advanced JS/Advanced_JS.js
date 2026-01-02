// // Asunchronous

// let val = 10
// console.log(`Given value ${val}`)

// let ID = setInterval(()=> {
//     console.log("Did I came between the loop printing ?")
// },3000)

// for (let i = 0;i<val;i++)
// {
//     console.log(i)
// } 

// setTimeout(()=>{
//     clearInterval(ID)
//     console.log("Interval Stopped")
// },12000)

// // Closure 

// function outer () {
//     let cnt = 0

//     return () => {
//         cnt++
//         return cnt
//     }
// }

// let num = outer()

// console.log(num())
// console.log(num())
// console.log(num())

// // Promises
// function fetchdata() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             let success = true
//             if(success) resolve("Data fetched successfully")
//             else reject("Fetch failed")
//         } , 3000)
//     })
// }

// fetchdata()
//     .then((data) => console.log(data) )
//     .catch((error) => console.log(error))

// async-await

// one function
// function fetchData()
// {
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=>{
//             reject({name:"google", url:"www.google.com"})
//         },3000)
//     })
// }

// async function getData() {
//     try {
//         console.log("fetching data . . .")
//         const userData = await fetchData()
//         console.log(userData)
//         console.log("Data fetched successfully")
//     } catch (error) {
//         console.log("Error fetching data",error)
//     }
// }
// getData()

// multiple function
function postData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve({data:"The GOAT of Football is Lionel Messi"})
        },3000)
    })
}
function commentData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve({data:"Lol , The GOAT of Football is Cristiano Ronaldo"})
        },2000)
    })
}

async function usersData() {
    try {
        console.log("Fetching post and comment data . . . ")
        const [userPostData,userCommentData] = await Promise.all([postData(),commentData()])
        console.log("Posted ",userPostData)
        console.log("Commented ",userCommentData)
        console.log("Data fetched successfully")
    } catch (error) {
        console.log("Error fetching data", error)
    }
}
usersData()