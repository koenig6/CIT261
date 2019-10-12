var jokeData = null;

function getData(){
var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		saveToLocal(this.responseText);
	}
});

xhr.open("GET", "https://sv443.net/jokeapi/category/Programming");
xhr.setRequestHeader("x-rapidapi-host", "jokeapi.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "b086763a6fmshd30cfe176b59170p1721d3jsn383d0383abde");

xhr.send(jokeData);
}

function saveToLocal(response) {
	jokeData = JSON.parse(response);

	localStorage.clear();

    localStorage.setItem("Joke", jokeData.joke);
    localStorage.setItem("Type", jokeData.type);
    localStorage.setItem("Setup", jokeData.setup);
    localStorage.setItem("Delivery", jokeData.delivery);
}

function displayJoke() {

    if (localStorage.getItem("Type") === "twopart")
        {

            var setup = localStorage.getItem("Setup");
            var delivery = localStorage.getItem("Delivery");
            document.getElementById("joke").innerHTML = setup + delivery;
        }

    if(localStorage.getItem("Type") === "single")
        {
            var name = localStorage.getItem("Joke");
            document.getElementById("joke").innerHTML = name;
        }
}

function getJoke() {
    getData();
    displayJoke();
  }



var data = null;

function getFoodData(){

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		saveToFoodLocal(this.responseText);
	}
});

xhr.open("GET", "https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=" + document.getElementById("search").value);


xhr.setRequestHeader("x-rapidapi-host", "food-calorie-data-search.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "b086763a6fmshd30cfe176b59170p1721d3jsn383d0383abde");

xhr.send(data);
}


function saveToFoodLocal(response) {

	localStorage.clear();

    localStorage.setItem("Food", response);

}


function displayResults() {

    var foodItems = localStorage.getItem("Food");

   data = JSON.parse(foodItems);

    //this resets the screen
    document.getElementById("foodResults").innerHTML = "";

    for(var a = 0; a < data.length; a++)
        {
            document.getElementById("foodResults").innerHTML += "Food: " + data[a].shrt_desc + "<br>";

            document.getElementById("foodResults").innerHTML += "Calories: " + data[a].energ_kcal + "<br>";

            document.getElementById("foodResults").innerHTML += "Carbohydrates: " + data[a].carbohydrt + "<br>";

            document.getElementById("foodResults").innerHTML += "Protein: " + data[a].protein + "<br>";
        }
}

function foodMatch() {
    getFoodData();
    displayResults();
  }










