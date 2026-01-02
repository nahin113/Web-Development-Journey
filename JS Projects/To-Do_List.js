// document.addEventListener("DOMContentLoaded",()=> {
//     let Input = document.getElementById("taskInp");
//     let Add_task = document.getElementById("taskbtn");
//     let tasklist = document.getElementById("taskList");

//     list = JSON.parse(localStorage.getItem("task")) || [];

//     list.forEach((task)=> renderTask(task))

//     Add_task.addEventListener("click", () => {
//       const task = Input.value.trim();
//       if (task === "") return;
//       const taskobj = {
//         id: Date.now(),
//         text: task,
//         completed: false,
//       };
//       list.push(taskobj);
//       saveTasks();
//       renderTask(taskobj) //how this is working
//       Input.value = "";
//     });

//     function renderTask(task) {
//       const li = document.createElement("li")
//       li.setAttribute("data-id",task.id) //what is being added
//       if(task.completed) li.classList.add("completed")
//       li.innerHTML = `
//       <span>${task.text}</span>
//       <button>Delete</button>
//       `;
//       tasklist.appendChild(li)

//       li.addEventListener("click",(e)=> {
//         if(e.target.tagName === "BUTTON") return
//         task.completed = !task.completed
//         li.classList.toggle("completed")
//         saveTasks()
//       })

//       li.querySelector("button").addEventListener("click",(e)=> {
//         e.stopPropagation(); //prevent toggle from firing
//         list = list.filter(t => t.id!==task.id)
//         li.remove()
//         saveTasks()
//       })
      
//     }

//     function saveTasks() {
//       localStorage.setItem("task", JSON.stringify(list));
//     }

// })



// // // Attemp 2
// document.addEventListener("DOMContentLoaded", ()=> {
//   let Input = document.getElementById("taskInp");
//   let AddTask = document.getElementById("taskbtn");
//   let TaskList = document.getElementById("taskList");

//   let Tasks = JSON.parse(localStorage.getItem("task")) || []

//   Tasks.forEach((t)=>renderTask(t))

//   AddTask.addEventListener("click", ()=> {
//     let tsk = Input.value.trim()
//     if(tsk === "") return

//     let tskObj = {
//       ID : Date.now(),
//       Text : tsk,
//       completed : false,
//     }

//     Tasks.push(tskObj);
//     saveTasks()
//     renderTask(tskObj)
//     Input.value = ""
//   })

//   function renderTask(task) {
//     const li = document.createElement("li")
//     if(task.completed) li.classList.add("completed")
//     li.setAttribute("data-id", task.ID)
//     li.innerHTML = `
//     <span>${task.Text}</span>
//     <button>Delete</button>
//     `
//     TaskList.appendChild(li)

//     li.addEventListener("click",(e)=>
//     {
//       if(e.target.tagName === "BUTTON") return
//       task.completed = !task.completed
//       li.classList.toggle("completed")
//       saveTasks()
//     })

//     li.querySelector("button").addEventListener("click",(e)=> {
//       e.stopPropagation()

//       Tasks=Tasks.filter(t => t.ID!==task.ID)
//       li.remove()
//       saveTasks()
//     })

//   }

//   function saveTasks()
//   {
//     localStorage.setItem("task", JSON.stringify(Tasks))
//   }

// })


// // // Attempt 3
document.addEventListener("DOMContentLoaded",()=> {
  let input = document.getElementById("taskInp")
  let addTask = document.getElementById("taskbtn")
  let taskList = document.getElementById("taskList")

  let Tasks = JSON.parse(localStorage.getItem("task")) || []

  Tasks.forEach((t)=>renderTask(t))

  addTask.addEventListener("click",()=> {
    let txt = input.value.trim()
    if(txt === "") return

    if (txt === "Love my babe" || txt === "love my babe") {
      txt = "I Love you too my baby 😘😘😘";
    }
    if (txt === "Talk with my babe" || txt === "talk with my babe") {
      txt = "My best moment of my day 😘😘";
    }
    if (txt === "marry nahin ahmed" || txt === "Marry Nahin Ahmed") {
      txt = "Insha Allah 💖";
    }
    let tskObj = {
      ID : Date.now(),
      Text : txt,
      Completed : false,
    } 
    Tasks.push(tskObj)
    saveTask()
    renderTask(tskObj)
    input.value = ""
  })

  function renderTask(task) {
    let li = document.createElement("li")
    li.setAttribute("data-id",task.ID)
    li.innerHTML = `
    <span>${task.Text}</span>
    <button>Delete</button>
    `
    taskList.appendChild(li);

    li.addEventListener("click",(e)=> {
      if(e.target.tagName==="BUTTON") return
     task.Completed = !task.Completed
     li.classList.toggle("completed")
      saveTask()
    })

    li.querySelector("button").addEventListener("click",(e)=> {
      e.stopPropagation()
      Tasks = Tasks.filter(t => t.ID!=task.ID)
      li.remove()
      saveTask()
    })
  }


  function saveTask()
  {
    localStorage.setItem("task",JSON.stringify(Tasks))
  }
})