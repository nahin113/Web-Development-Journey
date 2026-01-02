// document.addEventListener("DOMContentLoaded",()=> {
//     const expenseForm = document.getElementById("expense-form")
//     const expenseNameInput = document.getElementById("expense-name")
//     const expenseAmountInput = document.getElementById("expense-amount")
//     const expenseList = document.getElementById("expense-list")
//     const totalAmountDisplay = document.getElementById("total-amount")

//     let expenses =JSON.parse(localStorage.getItem("expenses")) || []
//     let Total = calculateTotal();

//     renderExpenses()

//     expenseForm.addEventListener("submit",(e)=> {
//         e.preventDefault()
//         const name = expenseNameInput.value.trim()
//         const amount = parseFloat(expenseAmountInput.value.trim())

//         if( name!=="" && !isNaN(amount) && amount>0)
//         {
//             const newExpense = {
//                 id : Date.now(),
//                 name : name,
//                 amount : amount
//             }

//             expenses.push(newExpense)
//             saveExpensesToLocal()
//             updateTotal()
//             renderExpenses()

//             expenseNameInput.value = ""
//             expenseAmountInput.value = ""
//         }
//     })

//     function calculateTotal() {
//             return expenses.reduce((sum,expense)=>sum+expense.amount,0)
//     }

//     function saveExpensesToLocal() {
//             localStorage.setItem("expenses",JSON.stringify(expenses))
//     }

//     function updateTotal() {
//             Total = calculateTotal()
//             totalAmountDisplay.textContent = Total.toFixed(2)
//     }

//     function renderExpenses() {
//         expenseList.innerHTML=""
//         expenses.forEach(expense => {
//             const li = document.createElement("li")
//             li.classList.add("expense")
//             li.innerHTML = `${expense.name} - ${expense.amount}
//             <button data-id = "${expense.id}">Delete</button>`
//             expenseList.appendChild(li);
//         })       
//     }

//     expenseList.addEventListener("click",(e)=>{
//         if(e.target.tagName === "BUTTON")
//         {
//             const id = parseInt(e.target.getAttribute("data-id"))
//             expenses = expenses.filter(expense => expense.id !== id)
//             saveExpensesToLocal()
//             renderExpenses()
//             updateTotal()
//         }
//     })

// })

// 2nd try
document.addEventListener("DOMContentLoaded",()=> {
    const expenseForm = document.getElementById("expense-form")
    const expenseName = document.getElementById("expense-name")
    const expenseAmount = document.getElementById("expense-amount")
    const expenseListDisplay = document.getElementById("expense-list")
    const totalAmountDisplay = document.getElementById("total-amount")

    let expenses = JSON.parse(localStorage.getItem("expenses")) || []
    let Total = calculateTotal()

    renderExpenses()

    expenseForm.addEventListener("submit",(e)=> {
        e.preventDefault() 
       const name = expenseName.value.trim() 
       const amount = parseFloat(expenseAmount.value.trim()) 

       if(name !== "" && !isNaN(amount) && amount>0)
       {
            const newExpense = {
                id: Date.now(),
                name : name,
                amount : amount
            }
            expenses.push(newExpense)
            saveExpensestoLocal()
            renderExpenses()
            updateTotal()

            expenseName.value = ""
            expenseAmount.value = ""

       }
    })

    function saveExpensestoLocal() {
        localStorage.setItem("expenses",JSON.stringify(expenses))
    }

    function calculateTotal() {
        return expenses.reduce((sum,expense) => sum+expense.amount,0)
    }

    function updateTotal() {
        Total = calculateTotal()
        totalAmountDisplay.textContent = Total.toFixed(2)
    }

    function renderExpenses() {
        expenseListDisplay.innerHTML=""

        expenses.forEach(expense => {
            const li = document.createElement("li")
            li.classList.add("expense")
            li.innerHTML = `
            ${expense.name} - ${expense.amount}
            <button data-id = "${expense.id}">Delete</button>
            `
            expenseListDisplay.appendChild(li)
        })
    }

    expenseListDisplay.addEventListener("click",(e)=> {
        if(e.target.tagName === "BUTTON") {
            const id = parseInt(e.target.getAttribute("data-id"))
            expenses = expenses.filter(expense=>expense.id !==id)

            saveExpensestoLocal()
            renderExpenses()
            updateTotal()
        }
    })
})