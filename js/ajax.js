var data = null;

var loveObject = new XMLHttpRequest();

loveObject.open("GET", "https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice");

loveObject.send(data);

loveObject.onclick = function(){

    var loveInfo = JSON.parse(loveObject.responseText)
    console.log(loveInfo);

    document.getElementById('fname').innerHTML = loveInfo.fname;
    document.getElementById('sname').innerHTML = loveInfo.sname;
    document.getElementById('percentage').innerHTML = loveInfo.percentage;
    document.getElementById('result').innerHTML = loveInfo.result;
}
