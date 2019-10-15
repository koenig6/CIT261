
function changeBackgroundColor() {
	var textbox_id = "txtColor";
	var textbox = document.getElementById(textbox_id);

	var div_id = "div2";
	var div = document.getElementById(div_id);

	// We should verify values here before we use them...
	var color = textbox.value;
	div.style.backgroundColor = color;

}

function changeBorder() {
	var textbox_id = "border";
	var textbox = document.getElementById(textbox_id);

	var div_id = "div2";
	var div = document.getElementById(div_id);

	// We should verify values here before we use them...
	var border = textbox.value;
	div.style.border = border;

}

function changeTextColor() {
	var textbox_id = "color";
	var textbox = document.getElementById(textbox_id);

	var div_id = "div2";
	var div = document.getElementById(div_id);

	// We should verify values here before we use them...
	var color = textbox.value;
	div.style.color = color;

}

function changeFont() {
	var textbox_id = "font";
	var textbox = document.getElementById(textbox_id);

	var div_id = "div2";
	var div = document.getElementById(div_id);

	// We should verify values here before we use them...
	var font = textbox.value;
	div.style.fontFamily = font;

}

function changeWidth() {
	var textbox_id = "width";
	var textbox = document.getElementById(textbox_id);

	var div_id = "div2";
	var div = document.getElementById(div_id);

	// We should verify values here before we use them...
	var width = textbox.value;
	div.style.width = width;

}
