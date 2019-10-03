var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

var imageArray = ["colorPage.jpg", "superWhy.jpg" ]

//<img src="img/lightbulb.jpg" alt="cupcake" width="128" height="102">

function displayImage(){

    var num = Math.floor(Math.random() * 2); // 0...6
    //document.canvas.src = 'http://placehold.it/400x300/cf5&text='+ imageArray[num];
    document.getElementById('myCanvas').innerHTML = imageArray[num];
    // document.getElementById("outputDiv2").innerHTML = reply;
}
