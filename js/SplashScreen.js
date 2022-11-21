class SplashScreen {
  constructor(){

    // Creem un hexagon Field 
    this.hexagonField = new HexagonField();
    // creem titlul jocului
    this.text = new Text("Stupul cu miere");
    // creem butonul de pornire
    this.button = new Button("Începe",);

    // TODO 
    var bee = new Image();
    bee.src = '';

    // We create gameObjects for SplashScreen;
    this.gameObjects = [this.hexagonField, this.text, this.button];


  }
  // Aici punem ca parametru contextul pentru a putea
  // desena în același context
  draw(ctx) {
    this.gameObjects.forEach((object)=>{
      object.draw(ctx);
    })

  }
  
  update(deltaTime) {
    this.gameObjects.forEach((object)=>{
      object.update(deltaTime);
    })
  }
}
