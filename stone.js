class Stone{
	constructor(x,y)
	{
	// assign options to the rubber ball
	    var options={
            restitution:0.8,
			friction:0.9,
			density:12


		}
		
	
		this.body=Bodies.rectangle(x,y,50,50,options)
        this.width=50
        this.height=50
		World.add(world, this.body);
      
	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
            rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			rect(0,0,this.width,this.height)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}