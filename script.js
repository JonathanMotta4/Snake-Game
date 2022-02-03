let canvas = document.getElementById("table");
let cxt = canvas.getContext("2d");
let box = 32;
let snake = []; //Criei a cobra como um array, já que é só um conjunto de coordenadas que são pintadas depois
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "null";
let food = {
  //Definição da posição das frutas
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

//Função para criar o fundo do canvas
function makeBG() {
  cxt.fillStyle = "lightgreen";
  cxt.fillRect(0, 0, 16 * box, 16 * box);
}
//Função para criar as frutas no canvas
function makeFood() {
  cxt.fillStyle = "red";
  cxt.fillRect(food.x, food.y, box, box);
}
//Função para criar a cobra
function makeSnake() {
  for (let i = 0; i < snake.length; i++) {
    cxt.fillStyle = "darkgreen";
    cxt.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

document.addEventListener("keydown", update);

//Função que gerencia os movimentos
function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 40 && direction != "up") direction = "down";
  console.log();
}

//Função para iniciar o jogo
function startGame() {

  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

  for(let i=1;i<snake.length;i++){
    if(snake[0].x == snake[i].x&&snake[0].y==snake[i].y){
      alert("--Fim de Jogo--\n--Endgame--\n--PRESS F5--")
    }
  }

  makeBG();
  makeSnake();
  makeFood();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  if (snakeX != food.x || snakeY != food.y) {
    snake.pop();
  }else{
    food.x=Math.floor(Math.random() * 15 + 1) * box;
    food.y=Math.floor(Math.random() * 15 + 1) * box;
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };
  snake.unshift(newHead);
}

//Variável que deixa o jogo em loop
let time = setInterval(startGame, 100);
