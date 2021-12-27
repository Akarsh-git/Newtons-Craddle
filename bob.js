class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.width = radius/2;
      this.height = radius/2;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      fill ("yellow");
      ellipseMode(RADIUS);
      push ();
      translate(pos.x,pos.y);
      rotate(angle);
      
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };