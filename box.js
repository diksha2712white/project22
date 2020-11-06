class Box {
    
    constructor(){
       this.box1=Bodies.rectangle(400,695,200,20,{isStatic:true})
       this.box2=Bodies.rectangle(300,625,20,100,{isStatic:true})
       this.box3=Bodies.rectangle(500,625,20,100,{isStatic:true})
       World.add(world,this.box1)
       World.add(world,this.box2)
       World.add(world,this.box3)
       }
        
    display(){
        rectMode(CENTER);
        noStroke();
        fill("red");
        rect(this.box1.position.x,this.box1.position.y,200,20)
        rect(this.box2.position.x,this.box2.position.y,20,100)
        rect(this.box3.position.x,this.box3.position.y,20,100)
        }
}