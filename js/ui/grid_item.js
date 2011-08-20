function GridItem(inputOptions){
  this.options = {
    width :50,
    height:50,
    color :'#ff0000',
    x:0,
    y:0,
    left:0,
    top:0
  }
  this.init = function(){
    $.extend(this.options, inputOptions);
  }
  this.init(inputOptions);
}

GridItem.prototype.render = function(target) {
  var item = $("<div class='item'></div>");
  item.css({
    width: this.options.width,
    height: this.options.height,
    'background-color': this.options.color,
    top: this.options.y + this.options.top,
    left: this.options.x + this.options.left
  })
  $(target).append(item);
};
