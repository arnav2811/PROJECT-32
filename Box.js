class Box {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.3,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.visibility = 255
  World.add(world, this.body);
  }
  display(a, b, c){
    if(this.body.speed<4){
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(a,b,c)
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
  
    }else{
      World.remove(world, this.body)
      push()
      this.visibility -= 10
      tint(255, this.visibility)
    
      pop()
    }
    
  }
  score(){
    if(this.visibility < 0 && this.visibility > -105){ 
     score++;
    }
  }
}
/*class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility = 255
    }
    display(a,b,c){  
      if(this.body.speed<3){
        fill(rgb(a,b,c))
        super.display()
    
      }else{
        rectMode(CENTER)
        push()
        this.visibility -= 5
        tint(255, this.visibility)
        rect(this.body.position.x, this.body.position.y, 50, 50)
        pop()
      }
      
    }
  };*/
 /* class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility = 255
    }
    display(a,b,c){  
      if(this.body.speed<3){
        fill(rgb(a,b,c))
        super.display()
    
      }else{
        World.remove(world, this.body)
        rectMode(CENTER)
        push()
        this.visibility -= 5
        tint(255, this.visibility)
        pop()
      }
      
    }
  };*/
  
  