class HexagonField{
  
  constructor(){

  }

  draw(ctx){
    var r = 0.2 * window.innerWidth;
    var ix = r;
    var iy = r;

    var x =ix;
    var y =iy;

    var a = 2 * Math.PI/6;
    var sign = 1;


    for(let j=1;j<20;j++){
      for(let i=0;i<20;i++){
          new Hexagon(ctx,x,y,r);
          x = x + r + r *Math.cos(a);
          y = y + sign*(r * Math.sin(a));
          sign = sign * -1;
      }
      y += 2* r * Math.sin(a);
      x = ix; 
  }

  }

  update(deltaTime){
    var r = 0.2 * window.innerWidth;
    var ix = r;
    var iy = r;

    var x =ix;
    var y =iy;

    var a = 2 * Math.PI/6;
    var sign = 1;


    for(let j=1;j<20;j++){
      for(let i=0;i<20;i++){
          new Hexagon(ctx,x,y,r);
          x = x + r + r *Math.cos(a);
          y = y + sign*(r * Math.sin(a));
          sign = sign * -1;
      }
      y += 2* r * Math.sin(a);
      x = ix; 
  }
    
  }

};
