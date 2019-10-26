function addItem(){
    var ul = document.getElementById("myList");
    var newItem = document.getElementById("item"); //get text from box
    var li = document.createElement("li"); // create li
    li.setAttribute({'id':'item.value',
                    'type':'hidden',
                    'name':'actors[]',
                    'value':'item'}); //gives li an id of the item
    li.appendChild(document.createTextNode(item.value)); // add to list
    ul.appendChild(li); // add to list
}


function removeItem(){
    var ul = document.getElementById("myList");
    var item = document.getElementById("item");
    var li = document.getElementById(item.value);
    ul.removeChild(li);
}

function importantItem() {
    var ul = document.getElementById("myList");
    var newItem = document.getElementById("item");
    var li = document.createElement("li");
    li.setAttribute('id',item.value);
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);

   var list = document.getElementById("myList");//identify list
  list.insertBefore(li, list.childNodes[0]);//add before top list item

}



function changeBackgroundColor() {
	var textbox_id = "txtColor";
	var textbox = document.getElementById(textbox_id);

	var ul_id = "myList";
	var div = document.getElementById(ul_id);

	// We should verify values here before we use them...
	var color = textbox.value;
	div.style.backgroundColor = color;

}

function changeBorder() {
	var textbox_id = "border";
	var textbox = document.getElementById(textbox_id);

	var ul_id = "myList";
	var div = document.getElementById(ul_id);

	// We should verify values here before we use them...
	var border = textbox.value;
	div.style.border = border;

}

function changeTextColor() {
	var textbox_id = "color";
	var textbox = document.getElementById(textbox_id);

	var ul_id = "myList";
	var div = document.getElementById(ul_id);

	// We should verify values here before we use them...
	var color = textbox.value;
	div.style.color = color;

}

function changeFont() {
	var textbox_id = "font";
	var textbox = document.getElementById(textbox_id);

	var ul_id = "myList";
	var div = document.getElementById(ul_id);

	// We should verify values here before we use them...
	var font = textbox.value;
	div.style.fontFamily = font;

}
