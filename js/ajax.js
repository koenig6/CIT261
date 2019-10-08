/*var data = null;

var loveObject = new XMLHttpRequest();

loveObject.withCredentials = true;

loveObject.open("GET", "https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice&apiKey=ApIKey");

loveObject.send(data);

loveObject.onclick = function(){

    var loveInfo = JSON.parse(loveObject.responseText)
    console.log(loveInfo);

    document.getElementById('fname').innerHTML = loveInfo.fname;
    document.getElementById('sname').innerHTML = loveInfo.sname;
    document.getElementById('percentage').innerHTML = loveInfo.percentage;
    document.getElementById('result').innerHTML = loveInfo.result;
}
*/

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice");
xhr.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "b086763a6fmshd30cfe176b59170p1721d3jsn383d0383abde");

xhr.send(data);
