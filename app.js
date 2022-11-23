var message = document.querySelector(".message");
var score = document.querySelector(".score");
var buttons = document.querySelectorAll("button");
var user = document.querySelector(".user")
var comp = document.querySelector(".comp")

var winnerScore = [0, 0];






for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", play);
  buttons[i].addEventListener("click", counter);
}

function play(event) {
  var playerSelect = event.target.innerText;

  var computerSelect = Math.random();

  if (computerSelect < 0.34) {
    computerSelect = "Камень";
  } else if (computerSelect <= 0.67) {
    computerSelect = "Бумага";
  } else {
    computerSelect = "Ножницы";
  }

  var result = checkWinner(playerSelect, computerSelect);

  if (result === "Игрок") {
    winnerScore[0]++;

  }

  if (result === "Компьютер") {
    winnerScore[1]++;
  }

  console.log("Игрок:", playerSelect, "Компьютер:", computerSelect);
  console.log(result, winnerScore);
}

function checkWinner(player, computer) {
  if (player === "Камень" && computer === "Бумага"|| player === "Бумага" && computer === "Ножницы" || player === "Ножницы" && computer === "Камень") {
    return "Компьютер";
  } else if (player === "Бумага" && computer === "Камень"|| player === "Ножницы" && computer === "Бумага"||player === "Камень" && computer === "Ножницы") {
    return "Игрок";
  }else if (player === "Бумага" && computer === "Бумага" || player === "Камень" && computer === "Камень"|| player === "Ножницы" && computer === "Ножницы"){
    return"draw";
  }

}


function counter () {
    user.innerHTML = winnerScore[0];
    comp.innerHTML = winnerScore[1];
}

counter()