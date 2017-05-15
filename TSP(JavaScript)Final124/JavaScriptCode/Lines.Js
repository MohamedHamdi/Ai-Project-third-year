function Line(start,end,cost,color){
    this.start = start;
    this.end = end;
    this.x1 = this.start.x+this.start.width/2;
    this.y1 = this.start.y+this.start.height/2;
    this.x2 = this.end.x+this.end.width/2;
    this.y2 = this.end.y+this.end.height/2;
    this.cost = cost;
    this.color = color;
    this.lineWidth = 1;
    this.visible = false;
    this.calculated = false;
    this.appearAlways = false;

      this.Draw = function (context)
    {
          if(this.visible==true || this.appearAlways == true)
          {
      context.beginPath();
      context.moveTo(this.x1,this.y1);
      context.lineTo(this.x2,this.y2);
      context.strokeStyle = this.color;
      context.lineWidth = this.lineWidth;
      context.stroke();
          }
    }

      this.DrawCost = function(context){
        if(this.visible){
            context.font = "10pt Calibria";
            context.fillStyle = "#000000";
            context.fillText("Cost : " + this.cost, (this.x1+this.x2)/2, (this.y1+this.y2)/2);

        }
      }

}
