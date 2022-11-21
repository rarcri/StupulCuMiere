class Game{
  constructor(width, height){
    // Setam marimea canvasului cat toata pagina 
    canvas.width = width;
    canvas.height = height;


  }

  start(){
    // creem un splashscreen 
    this.splashscreen = new SplashScreen();  

    // creem un vector cu toate elementele jocului
    this.gameObjects = [this.splashscreen];

  }


  update(deltaTime) {
    this.gameObjects.forEach((object)=>{
      object.update(deltaTime);
    })
  }

  draw(ctx) {
    this.gameObjects.forEach((object)=>{
      object.draw(ctx);
    })
  }
}
