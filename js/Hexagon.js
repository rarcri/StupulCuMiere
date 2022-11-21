class Hexagon {
  
  constructor(ctx,x,y,radius = 40){
    this.x = x;
    this.y = y;
    this.radius = radius;
    // Facem unghiul  de 120 de grade       
    //        _____         
    //       /     \        
    //      /       \       
    //     <         >      
    //      \       /       
    //       \_____/        
    //                      
    //                      
    
    this.angle = 2 * Math.PI / 6;
    this.draw(ctx);
  }
  draw(ctx){

    // Incepem Path-ul
    ctx.beginPath();  
    // setam culoarea cu care desenam
    ctx.strokeStyle = 'blue';

    for(let i=0;i<6;i++){
      // we create a position object
      let position = {
        // x point + radius in the cos(angle*i) direction
        x: this.x + this.radius * Math.cos(this.angle*i),
        // y point + radius in the sin(angle*i) direction
        y: this.y + this.radius * Math.sin(this.angle*i)
      };

      // Here we use the position object
      ctx.lineTo(position.x , position.y);

    }

    // Here we close the path
    ctx.closePath();
    // Here we stroke the path
    ctx.stroke();
  }
}
