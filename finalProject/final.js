function cupcakes()
{
    document.getElementById("one").innerHTML="<img src='img/andes.jpg' height=200px width=200px />";

    document.getElementById("two").innerHTML="<img src='img/bear.jpg' height=200px width=200px />";

    document.getElementById("three").innerHTML="<img src='img/apple.jpg' height=200px width=200px />";

     document.getElementById("four").innerHTML="<img src='img/smores.jpg' height=200px width=200px />";

     document.getElementById("five").innerHTML="<img src='img/cookieMonster.jpg' height=200px width=200px />";

     document.getElementById("six").innerHTML="<img src='img/purple.jpg' height=200px width=200px />";

}

function cookies()
{
    document.getElementById("one").innerHTML="<img src='img/hearts.jpg' height=200px width=200px />";

    document.getElementById("two").innerHTML="<img src='img/onsie.jpg' height=200px width=200px />";

    document.getElementById("three").innerHTML="<img src='img/paint.jpg' height=200px width=200px />";

     document.getElementById("four").innerHTML="<img src='img/lightbulb.jpg' height=200px width=200px />";

     document.getElementById("five").innerHTML="<img src='img/dress.jpg' height=200px width=200px />";

     document.getElementById("six").innerHTML="<img src='img/watermelon.jpg' height=200px width=200px />";

}

function cakes()
{
    document.getElementById("one").innerHTML="<img src='img/marbeling.jpg' height=200px width=200px />";

    document.getElementById("two").innerHTML="<img src='img/hat.jpg' height=200px width=200px />";

    document.getElementById("three").innerHTML="<img src='img/unicorn.jpg' height=200px width=200px />";

     document.getElementById("four").innerHTML="<img src='img/ruffles.jpg' height=200px width=200px />";

     document.getElementById("five").innerHTML="<img src='img/starwars.jpg' height=200px width=200px />";

     document.getElementById("six").innerHTML="<img src='img/trolls.jpg' height=200px width=200px />";

}

function price()
{
     document.getElementById("one").innerHTML="6\" Cake (12 servings) - $35<br>8\" Cake (20 servings) - $60<br>10\" Cake (28 servings) - <br>12\" Cake (40 servings) - $120<br>Half Sheet Cake (24 servings) - $72<br>Full Sheet Cake (54 Servings) - $150<br>Extra $50 for Carved Cakes ";

     document.getElementById("two").innerHTML="Basic Cupcakes  - $2.00 per cupcake<br>Themed Decorated Cupcakes or Toppers - $2.25 per cupcake<br><br>Specialty Cupcakes - $2.50 per cupcake (includes fillings or Cookies and Cream Cupcake, Chocolate Chip Cookie Dough cupcake, German Chocolate Cupcakes, etc.)";

    document.getElementById("three").innerHTML="Mini Cookies - $1.50 per Cookie<br>2-3 Colors - $3.00 per Cookie<br>4+ Colors - $3.20 per Cookie";

     document.getElementById("four").innerHTML=" ";

    document.getElementById("four").innerHTML=" ";

    document.getElementById("four").innerHTML=" ";
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
