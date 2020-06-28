console.log("Script Running");

let playerIcon = "O";
let turnCount = 0;
let winStatement = "We have a winner!";
let drawStatement = "We have a draw."
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let button7 = document.querySelector("#button7");
let button8 = document.querySelector("#button8");
let button9 = document.querySelector("#button9");
let winner = document.querySelector("#winner");

button1.addEventListener("click", e => {
  if (turnCount % 2 == 0) {
    playerIcon = "O";
  } else {
    playerIcon = "X";
  }
  turnCount += 1;
  console.log(turnCount)
  if (button1.innerText == "") {
    button1.innerHTML = `<h4> ${playerIcon} </h4>`;
    button1.disabled = true;
    button1.classList.add("noHover");
  }
  if (turnCount >= 3) {
    console.log("we need to check for a winner")
    checkWin();
  }
})

button2.addEventListener("click", e => {
  if (turnCount % 2 == 0) {
    playerIcon = "O";
  } else {
    playerIcon = "X";
  }
  turnCount += 1;
  console.log(turnCount)
  if (button2.innerText == "") {
    button2.innerHTML = `<h4> ${playerIcon} </h4>`;
    button2.disabled = true;
    button2.classList.add("noHover");
  }
  if (turnCount >= 3) {
    console.log("we need to check for a winner")
    checkWin();
  }
})

button3.addEventListener("click", e => {
  if (turnCount % 2 == 0) {
    playerIcon = "O";
  } else {
    playerIcon = "X";
  }
  turnCount += 1;
  console.log(turnCount)
  if (button3.innerText == "") {
    button3.innerHTML = `<h4> ${playerIcon} </h4>`;
    button3.disabled = true;
    button3.classList.add("noHover");
  }
  if (turnCount >= 3) {
    console.log("we need to check for a winner")
    checkWin();
  }
})

button4.addEventListener("click", e => {
  if (turnCount % 2 == 0) {
    playerIcon = "O";
  } else {
    playerIcon = "X";
  }
  turnCount += 1;
  console.log(turnCount)
  if (button4.innerText == "") {
    button4.innerHTML = `<h4> ${playerIcon} </h4>`;
    button4.disabled = true;
    button4.classList.add("noHover");
  }
  if (turnCount >= 3) {
    console.log("we need to check for a winner")
    checkWin();
  }
})

button5.addEventListener("click", e => {
  if (turnCount % 2 == 0) {
    playerIcon = "O";
  } else {
    playerIcon = "X";
  }
  turnCount += 1;
  console.log(turnCount)
  if (button5.innerText == "") {
    button5.innerHTML = `<h4> ${playerIcon} </h4>`;
    button5.disabled = true;
    button5.classList.add("noHover");
  }
  if (turnCount >= 3) {
    console.log("we need to check for a winner")
    checkWin();
  }
})

button6.addEventListener("click", e => {
  if (turnCount % 2 == 0) {
    playerIcon = "O";
  } else {
    playerIcon = "X";
  }
  turnCount += 1;
  console.log(turnCount)
  if (button6.innerText == "") {
    button6.innerHTML = `<h4> ${playerIcon} </h4>`;
    button6.disabled = true;
    button6.classList.add("noHover");
  }
  if (turnCount >= 3) {
    console.log("we need to check for a winner")
    checkWin();
  }
})

button7.addEventListener("click", e => {
  if (turnCount % 2 == 0) {
    playerIcon = "O";
  } else {
    playerIcon = "X";
  }
  turnCount += 1;
  console.log(turnCount)
  if (button7.innerText == "") {
    button7.innerHTML = `<h4> ${playerIcon} </h4>`;
    button7.disabled = true;
    button7.classList.add("noHover");
  }
  if (turnCount >= 3) {
    console.log("we need to check for a winner")
    checkWin();
  }
})

button8.addEventListener("click", e => {
  if (turnCount % 2 == 0) {
    playerIcon = "O";
  } else {
    playerIcon = "X";
  }
  turnCount += 1;
  console.log(turnCount)
  if (button8.innerText == "") {
    button8.innerHTML = `<h4> ${playerIcon} </h4>`;
    button8.disabled = true;
    button8.classList.add("noHover");
  }
  if (turnCount >= 3) {
    console.log("we need to check for a winner")
    checkWin();
  }
})

button9.addEventListener("click", e => {
  if (turnCount % 2 == 0) {
    playerIcon = "O";
  } else {
    playerIcon = "X";
  }
  turnCount += 1;
  console.log(turnCount)
  if (button9.innerText == "") {
    button9.innerHTML = `<h4> ${playerIcon} </h4>`;
    button9.disabled = true;
    button9.classList.add("noHover");
  }
  if (turnCount >= 3) {
    console.log("we need to check for a winner")
    checkWin();
  }
})

const checkWin = (e) => {
  console.log(turnCount);
  if (button1.innerText == button2.innerText && button1.innerText == button3.innerText && button1.innerText != "") {
    window.alert(winStatement)
    winner.classList.remove("hidden");
    winner.innerHTML = `<h3> And the winner is...Player ${button1.innerText}! Refresh the page to play again! </h3>`
  } else if (button4.innerText == button5.innerText && button4.innerText == button6.innerText && button4.innerText != "") {
    window.alert(winStatement)
    winner.classList.remove("hidden");
    winner.innerHTML = `<h3> And the winner is...Player ${button4.innerText}! Refresh the page to play again! </h3>`
  } else if (button7.innerText == button8.innerText && button7.innerText == button9.innerText && button7.innerText != "") {
    window.alert(winStatement)
    winner.classList.remove("hidden");
    winner.innerHTML = `<h3> And the winner is...Player ${button7.innerText}! Refresh the page to play again! </h3>`
  } else if (button1.innerText == button4.innerText && button1.innerText == button7.innerText && button1.innerText != "") {
    window.alert(winStatement);
    winner.classList.remove("hidden");
    winner.innerHTML = `<h3> And the winner is...Player ${button1.innerText}! Refresh the page to play again! </h3>`
  } else if (button2.innerText == button5.innerText && button2.innerText == button8.innerText && button2.innerText != "") {
    window.alert(winStatement)
    winner.classList.remove("hidden");
    winner.innerHTML = `<h3> And the winner is...Player ${button2.innerText}! Refresh the page to play again! </h3>`
  } else if (button3.innerText == button6.innerText && button3.innerText == button9.innerText && button3.innerText != "") {
    window.alert(winStatement)
    winner.classList.remove("hidden");
    winner.innerHTML = `<h3> And the winner is...Player ${button3.innerText}! Refresh the page to play again! </h3>`
  } else if (button1.innerText == button5.innerText && button1.innerText == button9.innerText && button1.innerText != "") {
    window.alert(winStatement)
    winner.classList.remove("hidden");
    winner.innerHTML = `<h3> And the winner...is Player ${button1.innerText}! Refresh the page to play again! </h3>`
  } else if (button3.innerText == button5.innerText && button3.innerText == button7.innerText && button3.innerText != "") {
    window.alert(winStatement)
    winner.classList.remove("hidden");
    winner.innerHTML = `<h3> And the winner is...Player ${button3.innerText}! Refresh the page to play again! </h3>`
  } else if (turnCount == 9) {
    window.alert(drawStatement)
    winner.classList.remove("hidden")
    winner.innerHTML = `<h3> ${drawStatement} Refresh the page to play again! </h3>`
  } else {
    console.log("No winner yet...keep playing!")
  }
}

