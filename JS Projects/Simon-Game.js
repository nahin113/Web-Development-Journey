let gameSeq = [];
let userSeq = [];

let buttons = ["purple", "navy", "yellow", "olive"];

let start = false;
let level = 0;

let h3 = document.querySelector("h3");

let highestScore = 0;

document.querySelector("#any").addEventListener("click", () => {
  if (!start) {
    start = true;
    levelUp()
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let random_index = Math.floor(Math.random() * 4);
  let random_color = buttons[random_index];
  let random_button = document.querySelector(`.${random_color}`);
  gameSeq.push(random_color);
  setTimeout(()=> {
    flashButton(random_button);
  },300)
}

function flashButton(random_button) {
  random_button.classList.add("flash");
  setTimeout(() => {
    random_button.classList.remove("flash");
  }, 250);
}
function greenFlashButton(random_button) {
  random_button.classList.add("greenFlash");
  setTimeout(() => {
    random_button.classList.remove("greenFlash");
  }, 250);
}
function redFlashButton(random_button) {
  random_button.classList.add("redFlash");
  setTimeout(() => {
    random_button.classList.remove("redFlash");
  }, 250);
}

function check(indx) {
  if (gameSeq[indx] === userSeq[indx]) {
    if (gameSeq.length === userSeq.length) setTimeout(levelUp, 800);
  } else {
    if (level > highestScore) highestScore = level;

    h3.innerHTML = `Wrong Sequence. Your score is <b>${level}</b> <br>Press any key to retry <br> <br> Highest Score <b>${highestScore}</b>`;

    document.querySelector("body").style.backgroundColor = "red"
    setTimeout(()=> {
        document.querySelector("body").style.backgroundColor = "white";
    }, 250)
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "red";
    }, 500);
    setTimeout(()=> {
        document.querySelector("body").style.backgroundColor = "white";
    }, 750)
    reset();
  }
}

function buttonPress() {
  let button = this;
  flashButton(button);

  let userColor = button.getAttribute("id");
  userSeq.push(userColor);
  check(userSeq.length - 1);
}

let allButton = document.querySelectorAll(".btn");

for (button of allButton) {
  button.addEventListener("click", buttonPress);
}

function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
