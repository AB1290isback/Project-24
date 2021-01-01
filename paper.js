class Paper {
     constructor(x,y,width,height){

     var paper_options = {
         isStatic : false,
         restitution : 0.3,
         friction : 0.5,
         density : 1.2

     }

     this.body = Bodies.rectangle(x,y,width,height,paper_options);
     this.width = width;
     this.height = height;

     World.add(world,this.body);

     }

  display(){

     
          ellipseMode(CENTER);
          fill("red");
          ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
      
     }
}