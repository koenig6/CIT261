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
    var newItem = document.getElementById("item"); //get text from box
    var li = document.createElement("li"); // create li
    li.setAttribute('id',item.value);
    li.appendChild(document.createTextNode(item.value)); // add to list
    ul.appendChild(li); // add to list
}


function removeItem()
{
    var ul = document.getElementById("myList");
    var item = document.getElementById("item");
    var li = document.getElementById(item.value);
    ul.removeChild(li);
}

function animationOne()
{
    if (document.getElementById('animationOne'))
        {
           var color = document.getElementById('animationOne');
            color.style.transition = "background-color 1.5s linear 0s"; // short hand target, duration to occur, timing, delay
            color.style.background = "orchid";
            color.addEventListener("transitionend", function(){
                color.style.background="rgba(255, 255, 255, 0.8)";
            });
        }
    else if (document.getElementById('animationThree'))
        {
            var color = document.getElementById('animationThree');
            color.style.transition = "background-color 1.5s linear 0s"; // short hand target, duration to occur, timing, delay
            color.style.background = "orchid";
            color.addEventListener("transitionend", function(){
                color.style.background="rgba(255, 255, 255, 0.8)";
            });
        }


}
