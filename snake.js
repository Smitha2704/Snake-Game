class Snake {
  
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 1;
  }
  
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
  
  update() {
    var head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x+=this.xdir;
    head.y+=this.ydir;
    this.body.push(head);
  }
  
  grow(){
    console.log("in Grow")
    var head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head)
  }

  end(){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;

    if(x>w-1 || x<0|| y>h-1||y<0){
      return true;
    }
    for(var i=0;i<this.body.length-1;i++){
      var part = this.body[i];
      if(part.x===x && part.y===y){
        return true;
      }
    }
    return false;
  }
  eat(pos){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;

    if((x>=pos.x-10 && x<=pos.x+10)&&(y==pos.y)||
      (y>=pos.y-10 && y<=pos.y+10)&&(x==pos.x)){
      console.log("Snake ate")
      this.grow();
      score++;
      console.log(score)
      return true;
    }
    /*if(x==pos.x && y==pos.y){
      console.log("Snake ate")
      this.grow();
      return true;
    }*/
    return false;
  }
  show(){
    for(var i=0; i<this.body.length; i++){
      fill(0);
      rect(this.body[i].x, this.body[i].y, 10,10)
    }
  }
  
  

}