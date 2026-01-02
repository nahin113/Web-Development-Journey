// S1
document.getElementById("searchBox").addEventListener("input",function(){
    let val = this.value.toLowerCase(); 
    let nameList = document.querySelectorAll("#nameList li");
    nameList.forEach(name => {
        if(val!="" && name.textContent.toLowerCase().includes(val))
        {
            name.style.display = "block";
        }
        else {
            name.style.display = "none";
        }
    });
})

// S2
function updateClock () {
    let now = new Date();
    
    let h = now.getHours();
    h = h % 12;
    h = h ? h : 12;
    h= String(h).padStart(2,'0'); 
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent = `${h}:${m}:${s}`;
}

setInterval(updateClock,1000);
updateClock();

// S3
document.getElementById("question1").addEventListener("click", function() {
    document.getElementById("answer1").style.display = document.getElementById("answer1").style.display === "block" ? "none" : "block";
})
document.getElementById("question2").addEventListener("click", function() {
    document.getElementById("answer2").style.display = document.getElementById("answer2").style.display === "block" ? "none" : "block";
})
document.getElementById("question3").addEventListener("click", function() {
    document.getElementById("answer3").style.display = document.getElementById("answer3").style.display === "block" ? "none" : "block";
})

// S4
let quotes = [
  "“Code is like humor. When you have to explain it, it’s bad.”",
  "“Talk is cheap. Show me the code.” – Linus Torvalds",
  "“Programs must be written for people to read.” – Harold Abelson",
  "“First, solve the problem. Then, write the code.”",
  "“Simplicity is the soul of efficiency.” – Austin Freeman"
];

document.getElementById("newQuote").addEventListener("click", function () {
    let random = Math.floor((Math.random()*quotes.length));
    document.getElementById("quote").textContent = quotes[random];
})

// S5
document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("light");
})