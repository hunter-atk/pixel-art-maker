var bodyElement = document.getElementsByTagName('body')[0];
bodyElement.style.width = "100%";
bodyElement.style.display = "flex";
bodyElement.style.justifyContent = "center";

var clickColor;
var color;

var container = document.createElement('container');
bodyElement.appendChild(container);
container.style.width = "980px";
container.style.padding = "25px 20px 0px 23px";
container.style.borderStyle = "solid";
container.style.borderWidth = "1px";
container.style.borderColor = "#d8d8d8";
container.style.borderRadius = "30px";
container.style.backgroundColor = "#d8d8d8";
container.style.boxShadow = "0px 0px 18px 0px #d8d8d8";
container.addEventListener('click', function(ev){
  ev.target.style.backgroundColor = clickColor;
  currentColor.style.backgroundColor = clickColor;
})


for (var i = 0; i < 2013; i++) {
  (function(index){
    var box = document.createElement('div');


    box.style.float = "left";
    box.style.width = "15px";
    box.style.height = "15px";
    box.style.backgroundColor = "white";
    box.style.borderStyle = "solid";
    box.style.borderWidth = "1px 1px 0 0";
    box.style.borderColor = "#d8d8d8";
    container.appendChild(box);
  })(i)
 }

var palleteContainer = document.createElement('container');
palleteContainer.addEventListener('click', function(ev){
  ev.target.borderColor = "black";
  ev.target.borderStyle = "solid";
  ev.target.borderRadius = "50%";
  clickColor = ev.target.style.backgroundColor;
})
container.appendChild(palleteContainer);
palleteContainer.style.display = "flex";
palleteContainer.style.alignItems = "flex-end";
palleteContainer.style.width = "980px";
palleteContainer.style.padding = "10px 10px 10px 10px";

for (var j = 0; j < 24; j++){
  (function(index) {
      //color = "#" + Math.floor(Math.random()*16777215).toString(16);
      var x = Math.round(0xffffff * Math.random()).toString(16);
      var y = (6-x.length);
      var z = "000000";
      var z1 = z.substring(0,y);
      color = "#" + z1 + x;
      var pallete = document.createElement('div');

    pallete.style.display = "flex";
    pallete.style.justifyContent = "space-between";
    pallete.style.flexWrap = "wrap";
    pallete.style.float = "left";
    pallete.style.width = "30px";
    pallete.style.height = "30px";
    pallete.style.backgroundColor = color;
    pallete.style.borderStyle = "solid";
    pallete.style.borderColor = color;
    pallete.style.borderWidth = "1px";
    pallete.style.borderRadius = "50%";
    pallete.style.margin = "4px";

    palleteContainer.appendChild(pallete);
  })(j)
}

var textContainer = document.createElement('container2');
container.appendChild(textContainer);
textContainer.style.display = "flex";
textContainer.style.alignItems = "flex-end";
textContainer.style.width = "980px";
textContainer.style.padding = "10px 10px 10px 10px";

var colorText = document.createElement('p');
colorText.setAttribute("font-size", "20px");
colorText.innerText += 'CURRENT COLOR:';
textContainer.appendChild(colorText);


var currentColor = document.createElement('currentColor');
textContainer.appendChild(currentColor);
currentColor.style.display = "flex";
currentColor.style.flexWrap = "wrap";
currentColor.style.alignItems = "flex-end";
currentColor.style.justifyContent = "center";
currentColor.style.width = "50px";
currentColor.style.padding = "10px 10px 10px 10px";
currentColor.style.backgroundColor = clickColor;
currentColor.style.borderStyle = "solid";
currentColor.style.borderColor = "black";
currentColor.style.borderRadius = "2px";
currentColor.style.borderWidth = "2px";
currentColor.style.marginLeft = "10px";
currentColor.style.marginBottom = "13px";
