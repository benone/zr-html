function Grid(inputOptions) {
  this.options = {
    width : 300,
    height : 300,
    colNum : 10,
    rowNum : 10
  }
  
  this.init = function(inputOptions){
    $.extend(this.options, inputOptions);
  }
  
  this.init(inputOptions);
}

Grid.prototype.render = function(target) {
  var container = $("<div class='grid_container'></div>");
  container.css({
    width: this.options.width,
    height: this.options.height
  })
  
  var itemWidth = this.options.width / this.options.colNum;
  var itemHeight = this.options.height / this.options.colNum;
  var containerOffset = $("#content").offset();
  
  for(var i=0; i<this.options.rowNum; i++){
    for(var j=0; j<this.options.colNum; j++){
      
      var item = new GridItem({
        width: itemWidth,
        height: itemHeight,
        x: j * itemWidth,
        y: i * itemHeight,
        left: containerOffset.left,
        top: containerOffset.top,
        color: getRandomColor
      });
  
      item.render(container);
      
    }
  }
  
  $(target).append(container);
};

function getRandomColor(){
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}