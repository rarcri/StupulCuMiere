class Text{
  constructor(text){
    // we create position
    this.position = {
      x: 0,
      y: 0
    }

    // We get the text
    this.text = text;
    
  }

  draw(ctx){
    // We put a font with 10% of the innerWidth
    ctx.font = `${0.1 * window.innerWidth}px serif`;

    // Masuram textul 
    let textMetrics = ctx.measureText(this.text);
    // facem ca textul sa fie luat din mijloc
    ctx.textBaseline = "middle";
    // culoarea de umplere este alb
    ctx.fillStyle = "#ffffff";

    // UMBRA
    // coloarea umbrei=negru
    ctx.shadowColor="black";
    // blurarea umbrei
    ctx.shadowBlur=10;

    //  we create the position object
    this.position = {
      x: window.innerWidth - textMetrics.width/2,
      y: 0.6 * window.innerHeight
    }
    ctx.fillText(this.text, this.position.x, this.position.y);
  }

  update(deltaTime){
    // We put a font with 10% of the innerWidth
    ctx.font = `${0.1 * window.innerWidth}px serif`;

    // Masuram textul 
    let textMetrics = ctx.measureText(this.text);
    // facem ca textul sa fie luat din mijloc
    ctx.textBaseline = "middle";
    // culoarea de umplere este alb
    ctx.fillStyle = "#ffffff";

    // UMBRA
    // coloarea umbrei=negru
    ctx.shadowColor="black";
    // blurarea umbrei
    ctx.shadowBlur=10;

    //  we create the position object
    this.position = {
      x: window.innerWidth - textMetrics.width/2,
      y: 0.6 * window.innerHeight
    }
    ctx.fillText(this.text, this.position.x, this.position.y);
  }
}
