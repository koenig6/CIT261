var jokeData = null;

//this is a millisecond counting delay to wait for async reply
function sleep(ms) {
    //delay function
  return new Promise(resolve => setTimeout(resolve, ms));
}

//getting info from api
function getData(){
var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		saveToLocal(this.responseText);
	}
});

    //endpoint
xhr.open("GET", "https://sv443.net/jokeapi/category/Programming");
xhr.setRequestHeader("x-rapidapi-host", "jokeapi.p.rapidapi.com");
    //key
xhr.setRequestHeader("x-rapidapi-key", "b086763a6fmshd30cfe176b59170p1721d3jsn383d0383abde");

xhr.send(jokeData);
}

function saveToLocal(response) {
	jokeData = JSON.parse(response);
    //gets rid of current data for new data
	localStorage.clear();

    //setting key, value pairs
    localStorage.setItem("Joke", jokeData.joke);
    localStorage.setItem("Type", jokeData.type);
    localStorage.setItem("Setup", jokeData.setup);
    localStorage.setItem("Delivery", jokeData.delivery);
    //tells me all data loaded
    localStorage.setItem("Ready", "Ready");
}

//async is key word for sleep function
async function displayJoke() {

    //this resets the screen
    document.getElementById("joke").innerHTML = "";

    for(let i = 1; i <= 10; i++)
        {
            document.getElementById("joke").innerHTML = "Fetching<br> - This might be funny... I'm not responsible for the contents of the joke...-";
            if(localStorage.getItem("Ready")  === "Ready")
               {
                    break;
               }
            if(i == 10)
                {
                    document.getElementById("joke").innerHTML += "Timeout expired to joke server.";
                    return;
                }
            //calling sleep funciton, sleep 1sec repeat code
            await sleep(1000);
        }

    //checking if one line joke or twoparter
    if (localStorage.getItem("Type") === "twopart")
        {

            var setup = localStorage.getItem("Setup");
            var delivery = localStorage.getItem("Delivery");
            document.getElementById("joke").innerHTML = setup + " " + delivery;
        }

    if(localStorage.getItem("Type") === "single")
        {
            var name = localStorage.getItem("Joke");
            document.getElementById("joke").innerHTML = name;
        }
}

function getJoke() {
    window.localStorage.clear();
    getData();
    displayJoke();
  }




//this is for the food api

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

	window.localStorage.clear();

    localStorage.setItem("Food", response);
    localStorage.setItem("Ready", "Ready");

}


async function displayResults() {

    //this resets the screen
    document.getElementById("foodResults").innerHTML = "";

    for(let i = 1; i <= 10; i++)
        {
            document.getElementById("foodResults").innerHTML = "Fetching<br> - Are you a fan of flavor? -";
            if(localStorage.getItem("Ready")  === "Ready")
               {
                    break;
               }
            if(i == 10)
                {
                    document.getElementById("foodResults").innerHTML += "Timeout expired to food server.";
                    return;
                }
            await sleep(1000);
        }

    var foodItems = localStorage.getItem("Food");

    data = JSON.parse(foodItems);

    document.getElementById("foodResults").innerHTML = "";

    for(var a = 0; a < data.length; a++)
        {
            document.getElementById("foodResults").innerHTML += "Food: " + data[a].shrt_desc + "<br>";

            document.getElementById("foodResults").innerHTML += "Calories: " + data[a].energ_kcal + "<br>";

            document.getElementById("foodResults").innerHTML += "Carbohydrates: " + data[a].carbohydrt + "<br>";

            document.getElementById("foodResults").innerHTML += "Protein: " + data[a].protein + "<br><br><br>";
        }
}

function foodMatch() {
    window.localStorage.clear();
    getFoodData();
    displayResults();

  }










