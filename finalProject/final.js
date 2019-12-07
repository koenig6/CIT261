function cupcakes()
{
    document.getElementById("one").innerHTML="<img src='img/andes.jpg' height=200px width=200px />";

    document.getElementById("two").innerHTML="<img src='img/bear.jpg' height=200px width=200px />";

    document.getElementById("three").innerHTML="<img src='img/monster.jpg' height=200px width=200px />";

}

function cookies()
{
    document.getElementById("one").innerHTML="<img src='img/hearts.jpg' height=200px width=200px />";

    document.getElementById("two").innerHTML="<img src='img/onsie.jpg' height=200px width=200px />";

    document.getElementById("three").innerHTML="<img src='img/paint.jpg' height=200px width=200px />";

}

function cakes()
{
    document.getElementById("one").innerHTML="<img src='img/marbeling.jpg' height=200px width=200px />";

    document.getElementById("two").innerHTML="<img src='img/ruffles.jpg' height=200px width=200px />";

    document.getElementById("three").innerHTML="<img src='img/topFlower.jpg' height=200px width=200px />";

}

function addItem()
{
    var ul = document.getElementById("myList");
    var newItem = document.getElementById("input"); //get text from box
    var li = document.createElement("li"); // create li
    li.setAttribute('id',input.value);
    li.appendChild(document.createTextNode(input.value)); // add to list
    ul.appendChild(li); // add to list
}


function removeItem()
{
    var ul = document.getElementById("myList");
    var item = document.getElementById("input");
    var li = document.getElementById(input.value);
    ul.removeChild(li);
}

// Create a new color picker instance
// https://iro.js.org/guide.html#getting-started
var colorPicker = new iro.ColorPicker(".colorPicker", {
  // color picker options
  // Option guide: https://iro.js.org/guide.html#color-picker-options
  width: 280,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#fff",
});

var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function(color){
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  values.innerHTML = [
    "hex: " + color.hexString,
    "rgb: " + color.rgbString,
    "hsl: " + color.hslString,
  ].join("<br>");
});
