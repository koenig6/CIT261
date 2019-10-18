function bigNav(x) {
  x.style.fontSize = "46px";
}

function normalNav(x) {
  x.style.fontSize = "13px";
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
  event.dataTransfer.setData("Img", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Img");
  event.target.appendChild(document.getElementById(data));
}
