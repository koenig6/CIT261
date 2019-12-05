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

