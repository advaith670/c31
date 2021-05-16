class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trejectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

   // console.log(this.body.position.x);
   // console.log(this.body.velocity.x);

   if(this.body.position.x>200 && this.body.velocity.x>1){
    var pos = [this.body.position.x,this.body.position.y]
    this.trejectory.push(pos)}

   // console.log(this.trejectory)

    for(var i = 0;i<this.trejectory.length;i++)
      image(this.smokeImage,this.trejectory[i][0],this.trejectory[i][1])
  }
}

