let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = window.innerWidth;
const GAME_HEIGHT = window.innerHeight;



let game = new Game();
game.start();


let lastTime = 0;



function gameLoop(timeStamp){
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  // get all elements that need to be removed
  let elementsToRemove = [...document.body.getElementsByClassName("btn")];
  elementsToRemove.forEach((element)=>{document.body.removeChild(element)});

  // clear the rect
  ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}
  
requestAnimationFrame(gameLoop);
