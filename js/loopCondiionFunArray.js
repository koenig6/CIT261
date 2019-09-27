/*Function and if else statement*/

function evenlyDivisible ()
{
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

        else if (((counter % divisor) != 0) && (counter != end))
        {

        }

	   else
       {
           if(output == "")
               {
                    output = "No numbers are divisible by your divisor.";
               }
           else
               {
                   document.getElementById('output').innerHTML = output;
               }
	   }
    }
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
    lastName.toLocaleLowerCase();
    var letter = lastName.charAt(0);
    var reply;

    switch(letter){

        case "a":
        case "z":
        case "q":
            reply = "Oh ya, we had a class together!";
            break;
        case "b":
        case "y":
        case "p":
            reply = "Nice to meet you again!";
            break;
        case "c":
        case "x":
        case "o":
            reply = "No, I don't think we have met before.";
            break;
        case "d":
        case "w":
        case "n":
            reply = "I know your sister! How is she doing?";
            break;
        case "e":
        case "v":
        case "m":
            reply = "Oh, I must be mistaken.";
            break;
        case "f":
        case "u":
        case "l":
            reply = "You remind me of someone I once knew.";
            break;
        case "g":
        case "t":
        case "k":
            reply = "I guess you just have a familiar face.";
            break;
        case "h":
        case "s":
        case "j":
            reply = "Are you related to the " + lastName + "'s who are from Atlanta?";
            break;
        case "i":
        case "r":
            reply = "I think we have met before.";
            break;

    }

    document.getElementById("outputDiv").innerHTML = reply;
    }


