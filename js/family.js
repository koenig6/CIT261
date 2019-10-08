document.getElementsByTagName('article').onmouseover = function()
{mouseOver(this)};

document.getElementsByTagName('article').onmouseout = function()
{mouseOut(this)};

function mouseOver(x) {
  document.getElementsByTagName("article").style.height = "330px";
   document.getElementsByTagName('article').style.width = "283.99px";
     document.getElementsByTagName("article").style.color = "#3AAFA9";
}

function mouseOut(x) {
  document.getElementsByTagName("article").style.height = "264px";
   document.getElementsByTagName('article').style.width = "227.19px"
    document.getElementsByTagName("article").style.color = "black";
}
