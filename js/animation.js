function animationOne()
{
    var color = document.getElementById('animationOne');
    color.style.transition = "background 1.5s linear 0s"; // short hand target, duration to occur, timing, delay
    color.style.background = "blue";
    color.addEventListener("transitionend", function(){
        color.style.background="red";
    });
}

function animationTwo()
{
    var fade = document.getElementById('animationTwo');
    fade.style.transition = "opacity 1.5s linear 0s"; //target, duration to occur, timing, delay
    fade.style.opacity = 0;
}

function animationThree()//this function can be width or if you set "left" in css you can use left or right
{
    var slide = document.getElementById('animationThree');
    slide.style.transition = "width 3.5s ease-in 0s"; //target, duration to occur, timing, delay
    slide.style.width = "300px";
}

function animationFiveMove()
{
  animationFive.style.animation = "boxFive 2.0s ease 5";
    animationFive.addEventListener("animationend", function()
        {this.style.opacity=".35";});
}

function animationSixAppend()
{
    var append = document.styleSheets[0].cssRules[18];
    append.appendRule('50% {background: black; height: 25px; width: 25px}')
}







