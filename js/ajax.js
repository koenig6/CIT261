var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}



    document.getElementById('fname').innerHTML =
});

xhr.open("GET", "https://love-calculator.p.rapidapi.com/getPercentage", true);
xhr.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "b086763a6fmshd30cfe176b59170p1721d3jsn383d0383abde");

xhr.send(data);



