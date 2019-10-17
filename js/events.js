function bigNav(x) {
  x.style.fontSize = "46px";
 // x.style.width = "400px";
}

function normalNav(x) {
  x.style.fontSize = "13px";
  //x.style.width = "200px";
}

function myFunction() {
  var pic = document.getElementById("colorpage").src;

        if(pic.includes('img/superWhy.PNG'))
            {
                document.getElementById("colorpage").src = "img/colorPage.PNG";
            }
        if(pic.includes('img/colorPage.PNG'))
            {
                document.getElementById('colorpage').src = "img/butterfly.PNG";
            }
        if(pic.includes('img/butterfly.PNG'))
        {
            document.getElementById('colorpage').src = "img/iceCream.PNG";
        }
        if(pic.includes('img/iceCream.PNG'))
        {
            document.getElementById('colorpage').src = "img/superWhy.PNG";
        }
}

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "The p element was dropped";
}
