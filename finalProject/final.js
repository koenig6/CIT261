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
     document.getElementById("one").innerHTML="6\" Cake (12 servings) - $35<br>8\" Cake (20 servings) - $60<br>10\" Cake (28 servings) -$85<br>12\" Cake (40 servings) - $120<br>Half Sheet Cake (24 servings) - $72<br>Full Sheet Cake (54 Servings) - $150<br>Extra $50 for Carved Cakes ";

     document.getElementById("two").innerHTML="Basic Cupcakes  - $2.00 per cupcake<br>Themed Decorated Cupcakes or Toppers - $2.25 per cupcake<br><br>Specialty Cupcakes - $2.50 per cupcake (includes fillings or Cookies and Cream Cupcake, Chocolate Chip Cookie Dough cupcake, German Chocolate Cupcakes, etc.)";

    document.getElementById("three").innerHTML="Mini Cookies - $1.50 per Cookie<br>2-3 Colors - $3.00 per Cookie<br>4+ Colors - $3.20 per Cookie";

     document.getElementById("four").innerHTML=" ";

    document.getElementById("four").innerHTML=" ";

    document.getElementById("four").innerHTML=" ";
}

function addItem()
{
    var ul = document.getElementById("myList"); //where list will go

    var newItem = document.getElementById("input"); //get text from box

    var li = document.createElement("li"); // create li

    li.setAttribute('id',input.value); // gives li an id

    li.appendChild(document.createTextNode(input.value)); // puts text from textbox in the li
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
  width: 180, // the size of the colorpicker
  color: "rgb(255, 0, 0)", //initial color on load
  borderWidth: 1,
  borderColor: "black",
});

var values = document.getElementById("values");

var savingColor;

colorPicker.on(["color:init", "color:change"], function(color){
  values.innerHTML = [
    "hex: " + color.hexString,
    //"rgb: " + color.rgbString,
  ].join("<br>");

     savingColor = color.hexString;
    console.log('inside colorPicker' + savingColor);
});

console.log(savingColor);
function addColor()
{
    console.log('button pushed');
    console.log('savingColor:' + savingColor);

    var iDiv = document.getElementById('colors');//identify where new div will go

    var innerDiv = document.createElement('div');//create new div

    innerDiv.setAttribute('class', 'colorSelect');
    innerDiv.setAttribute('id', savingColor); //create new div an id
    innerDiv.style.background = savingColor; //give new div its color
    innerDiv.style.height = '50px';
    innerDiv.style.width = '150px';

    innerDiv.appendChild(document.createTextNode('Click here to note what color is for')); // what I want div to say

    iDiv.appendChild(innerDiv);
}

























