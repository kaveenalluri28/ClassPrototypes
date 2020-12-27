class Boxes {

      constructor(x,y,width,height)
       // creates the soul with options 
      //and adds it to world
      {
       
            this.width = width; // width for this instance 
            this.height = height; // height for this instance

            // some options for this.body
            var options = {
                  'restitution':0.8,
                  'friction':0.3,
                  'density':1.0
            }
            this.body = Bodies.rectangle(x,y,width,height,options); // a soul creation
            World.add(world,this.body); // adding soul to the wotld object
      }

      display() 
      // displays the box (also attaches soul to dummy body)
      {
             
            var pos = this.body.position;
             
            push() // starts falling action of this.body
            translate(pos.x,pos.y); // translate body positions without loss of speed 
            rotate(this.body.angle); // rotates falling body according to its angle
            rectMode(CENTER); // shifts the main position of body to center
            rect(0,0,this.width,this.height); // make positions '0' after fall/ translate

            pop(); // stops the falling action of this.body
            
      }

}