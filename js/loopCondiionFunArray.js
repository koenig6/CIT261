/*Function and if else statement*/

function evenlyDivisible (){
 var start = parseInt(document.getElementById("start").value);
 var end = parseInt(document.getElementById("end").value);
 var divisor = parseInt(document.getElementById("divisor").value);
 var output = "";

for (var counter = start ; counter <= end; counter++)
    {

        if (( counter % divisor) == 0 )
            {
		      output += counter + " ";
	       }

	   else
       {
		  output = "No numbers are divisible by your divisor.";
	   }
    }
 document.getElementById('output').innerHTML = output
}






/*Function and array*/

function switchItup(){
    var size = parseInt(document.getElementById("sizeArray").value);

    var theList = [];

    for(var i = 0; i < size; i++)
        {
            theList.push(prompt("Enter a number"));
        }

var output = "Your numbers flipped will be " + reverseList(theList);

document.getElementById('outputDiv').innerHTML = output;

}
function reverseList(theList){
	// Reverses the contents of the specified array.

    var left = 0;
    var right = theList.length - 1;

    while (left < right) {
        // Exchange two elements.
        var swap = theList[left];
        theList[left] = theList[right];
        theList[right] = swap;

        // Move the indexes toward the center.
        left++;
        right--;
    }
return theList;

}









/*Function and switch*/

function knowYou(){
    var lastName = document.getElementById('name').value;
    var letter = lastName.charAt(0);
    var reply;

    switch(letter){

        case "a":
            reply = "Oh ya, we had a class together!";
            break;
        case "b":
            reply = "Nice to meet you again!";
            break;
        case "c":
            reply = "No, I don't think we have met before.";
    }

    document.getElementById("outputDiv").innerHTML = reply;
    }


