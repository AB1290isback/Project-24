class Dustbin1 {
     constructor(x,y,width,height){
     var options = {
          isStatic : true
     }

     this.width=width;
     this.height=height;
     this.body = Bodies.rectangle(x,y,width,height,options);
    
    
     World.add(world,this.body);

}

display(){
   
     var dustpos = this.body.position;
  push ();
     translate (dustpos.x,dustpos.y);
     rectMode(CENTER);
     fill("blue");
     rect(0,0,this.width,this.height);
  pop ();
   
}

}