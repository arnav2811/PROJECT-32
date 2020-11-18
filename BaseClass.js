class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(a, b, c){
        var angle = this.body.angle;
        //color = a, b, c
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(a,b,c)
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}