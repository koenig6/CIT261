function evenlyDivisible (){
 var start = parseInt(document.getElementById("start").value);
 var end = parseInt(document.getElementById("end").value);
 var divisor = parseInt(document.getElementById("divisor").value);
 var output = "";

 for (var counter = start ; counter <= end; counter++)
		{

			if (( counter % divisor) == 0 ){
		output += counter + " ";
	}

	else{
		output = "No numbers are divisible by your divisor.";
	}


  }
 document.getElementById('output').innerHTML = output
 }
