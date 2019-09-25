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















    function switchItup(){
	var size = parseInt(document.getElementById("sizeOf").value;

    var theList = [];

    for(var i = 0; i < size; i++)
        {
            theList.push(prompt("Enter a number"));

        }


/*var theList = [1, 4, 2, 7, 9];*/

	var output = "Your numbers flipped will be " + reverseList(theList);

  document.getElementById('outputDiv').innerHTML = output;

}



function reverseList(theList){

	var retval = [];

	for (move = theList.length-1; move >= 0; move--)
	{
		retval.push (theList [move]);
		{
		output = move;
		}

	}
	//this makes the first number the last number
	//var swop = theList[0] = theList[theList.length -1];
	return retval;
}


