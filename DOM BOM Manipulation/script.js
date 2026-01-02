// Task 1
document.getElementById("CngTxtBtn").addEventListener("click",function() {
    document.getElementById("CngTxt").textContent = "Wow ! You have changed the paragraph";
})

// Task 2
document.getElementById("citybtn").addEventListener("click",function() {
    document.getElementById("cityList").firstElementChild.classList.toggle("highlight");
})

// Task 3 
document.getElementById("cngOrder").addEventListener("click",function(){
    let Coffee = document.getElementById("cfType");
    Coffee.textContent = "Espresso";
    Coffee.style.backgroundColor = "brown"; // can add CSS, but repeatative here , good for minor change
})

// Task4
document.getElementById("addG").addEventListener("click",function() {
    let player = document.createElement("li");
    player.textContent = "Neymar Jr.";

    document.getElementById("players").appendChild(player);
})

// Task5
document.getElementById("rmvtask").addEventListener("click",function() {
    let task = document.getElementById("tasks");
    task.lastElementChild.remove();
})

// Task6
document.getElementById("clickMe").addEventListener("dblclick",function(){
    alert("Key Pressed");
})

// Task 7
document.getElementById("teaLst").addEventListener("click", function(event) {
    if(event.target && event.target.matches(".teaItm")) {
        event.target.classList.add("highlight");
    }
})

// Task8 
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let form = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = `Feedback is : ${form}`;
})

// Task9
document.addEventListener("DOMContentLoaded",function() {
    document.getElementById("DOMcontent").textContent="DOM content fully loaded"
})

// Task10
document.getElementById("toggle").addEventListener("click",function() {
    let content = document.getElementById("Content");
    content.classList.toggle(".highlight");
})