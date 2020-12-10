const Box = new Object()
  Box.color = "red";
  Box.size = 10;
  Box.amount = 0;
  Box.fill = function (){
    this.amount += 2;}
  Box.consume = function (){
    this.amount -=2;}
    
    Box.fill();
    Box.consume();