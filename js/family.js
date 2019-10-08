document.getElementsByTagName('article').onmouseover = function()
{mouseOver()};

document.getElementsByTagName('article').onmouseout = function()
{mouseOut()};

function mouseOver() {
  document.getElementsByTagName("article").style.height = "330px";
   document.getElementsByTagName('article').style.width = "283.99px";
     document.getElementsByTagName("article").style.color = "#3AAFA9";
}

function mouseOut() {
  document.getElementsByTagName("article").style.height = "264px";
   document.getElementsByTagName('article').style.width = "227.19px"
    document.getElementsByTagName("article").style.color = "black";
}
