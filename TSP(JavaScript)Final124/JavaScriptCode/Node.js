function node(x,y,w,h,i,image){

    this.state = 0;
    this.parent = null;
    this.depth = 0;
    this.image;
    this.childs = [];

    this.visited = false;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = image;
    this.clicked = false;
    this.index = i;
    this.totalCost = 0;
    this.oldTotalCost =0;
    this.goal = false;

      this.Draw = function (context)
    {
        context.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
    this.imageUpdate = function (image)
    {
        this.image = image;
    }
    this.clear = function (context){
          context.clearRect(this.x,this.y,50,50);
    }
    this.DrawIndex = function(context)
    {
      context.font = "10pt Calibria";
      context.fillStyle = "#000000";
      context.fillText(this.index, this.x, this.y);
    }
}
