class Holder{
    /*constructor(){
        this.polygon = Matter.Bodies.polygon(50, 200,8, 20)
        World.add(world, polygon)
    }
    display(){
        ellipseMode(CENTER)
        fill("purple")
        ellipse(this.polygon.position.x, this.polygon.position.y, 20)
    }*/
    constructor(){
        var qualities={
            isStatic: false,
            friction: 0.0001,
            mass: 2500,
            frictionAir:0.0001,
            density:1
        }
        this.bodies = Bodies.rectangle(100, 100, 50, 60, qualities)
        this.image = loadImage("Hexagon.png")
        World.add(world, this.bodies)
    }
    display(){
        imageMode(CENTER)
        fill("red")
        image(this.image,this.bodies.position.x, this.bodies.position.y, 80, 80)
    }
}