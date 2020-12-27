class Ground {

      constructor(x,y,width,height)
       // creates the soul with options 
      //and adds it to world
      {
       
            this.width = width; // width for this instance 
            this.height = height; // height for this instance

            var options = {
                  isStatic : true
            }
            this.body = Bodies.rectangle(x,y,width,height,options);
            World.add(world,this.body);
      }

      display() // displays the box (also attaches soul to dummy body)
      {
             
            var pos = this.body.position;
            rectMode(CENTER); 
            rect(pos.x,pos.y,this.width,this.height);
            
      }

}