document.getElementByTagName('article').addEventListener('mouseover', mouseOver);

document.getElementByTagName('article').onmouseout = function()
{mouseOut(this)};

function mouseOver() {
  document.getElementByTagName('article').style.height = "330px";
   document.getElementByTagName('article').style.width = "283.99px";
     document.getElementByTagName("article").style.color = "#3AAFA9";
}

function mouseOut(x) {
  document.getElementByTagName('article').style.height = "264px";
   document.getElementByTagName('article').style.width = "227.19px"
    document.getElementByTagName("article").style.color = "black";
}
