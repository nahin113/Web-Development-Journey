// Task1

const image = [
    "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
    "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
]
let i = 0;
document.getElementById("next").addEventListener("click",function() {
    let img = document.getElementById("img");
    i = (i + 1) % image.length;
    img.src = image[i];
})
document.getElementById("prev").addEventListener("click",function() {
    let img = document.getElementById("img");
    i = (i + 1) % image.length;
    img.src = image[i];
})

// Task2
let cnt = 0;
document.getElementById("clickCnt").addEventListener("click", function(){
    document.getElementById("num").textContent = cnt++;
})


// Task3
document.getElementById("feedback").addEventListener("input",function() {
    let inptxt = this.value;
    console.log(inptxt);
    document.getElementById("number").textContent = inptxt.length;
})

// Task4
document.getElementById("add").addEventListener("click",function () {
    let input = document.getElementById("task").value.trim();
    if(input!="")
    {
        let val = document.createElement("li");
        val.textContent = input;
        document.getElementById("taskList").appendChild(val);
    }
})

document.getElementById("rmv").addEventListener("click",function () {
    document.getElementById("taskList").lastElementChild.remove();
})

// Task5
document.getElementById("inpType").addEventListener("change", function() {
    if(this.checked)
    {
        document.getElementById("pass").type = "text";
    }
    else {
        document.getElementById("pass").type = "password";
    }
})

// Task6
document.getElementById("toggleTheme").addEventListener("click",function() {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")) {
        this.textContent = "Light";
    }
    else {
        this.textContent = "Dark";
    }
})

// Task7

