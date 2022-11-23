const block = document.querySelector(".block");

let positionX = 0;
let positionY = 0;

const move = () => {
  if (positionX <= 360 && positionY == 0) {
    positionX += 1;
    block.style.left = `${positionX}px`;
    setTimeout(move, 200);
  } else if (positionX >= 360 && positionY <= 360) {
    positionY += 16;
    block.style.top = `${positionY}px`;
    setTimeout(move, 200);
  } else if (positionY >= 360 && positionX != 0) {
    positionX -= 16;
    block.style.left = `${positionX}px`;
    setTimeout(move, 200);
  } else if (positionX == 0 && positionY != 0) {
    positionY -= 16;
    block.style.top = `${positionY}px`;
    setTimeout(move, 200);Т
  }
};

move();

setInterval(() => {
  console.log("sec");
}, 1000);