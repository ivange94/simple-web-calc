/*
	advance.js
	
	This javascript file handles the advance functionality of my calculator. This was not part of the requirement from 
	the teacher so i created a separate javascript file for this. The teachers requirements are implemented in basic.js
	
*/

/*
	Author: Ivange Larry Ndumbe
	Matricule: FE13A096
*/


var textInput = document.myForm.txtInput; // storing reference of text input box in textInput
var clearScreen = false; // this variable is used by some functions to know whether to clear the screen before sending their output to screen
var simple = document.getElementById("simple");

simple.style.color = 'black'; // set text color of the row containing time bar

var ANGLE_TYPE_DEGREES = 0;
var ANGLE_TYPE_RADIANS = 1;

var ANGLE_TYPE = ANGLE_TYPE_DEGREES;

// change angle type
function changeAngleType() {
	ANGLE_TYPE = parseInt(document.myForm.radAngleType.value);
} // end function changeAngleType()

/*
	handle button 1 keypad press.
	first i check if i need to clear screen.Why?. I do this check because, when i do a calculation say 1 + 2, and click '=', '3' will be displayed on the 
	screen, if i try to enter another character for some other calculation say '56' without clearing the screen, i will end up with '356' which is not what
	i want so i clear the screen. To clear screen i use global variable clearScreen, if this variable is true, then i will need to clear screen before i send 
	data to screen then set it to false. This variable clearScreen is always set to true after after i press the '=' key.
*/
function btn1Keypad_onclick () {
	if (clearScreen == true) { // checking whether clearSreen is true
		textInput.value = "0"; // if true i clear screen by simply initializing the value property of textInput to "0";
		clearScreen = false;
	}
	if (isDisplayEmpty()) // when appending data to screen i first need to check if display is empty 
		textInput.value = "1"; // i display is empty, that is only a '0', i will override it with character clicked
	else 
		textInput.value += "1"; // if display is not empty. that is, there is already some character on the display apart from '0', i will append the keypress to characters on display 	
} // end method btn1Keypad_onclick()

/*
	handle button 2 keypad press.
	explanation for this method is the same as that for btn1Keypad_onclick()
*/
function btn2Keypad_onclick () {
	if (clearScreen == true) {
		textInput.value = "0";
		clearScreen = false;
	}
	if (isDisplayEmpty())
		textInput.value = "2";
	else
		textInput.value += "2";
} // end method btn2Keypad_onclicd()

/*
	handle button 3 keypad press.
*/
function btn3Keypad_onclick () {
	if (clearScreen == true) {
		textInput.value = "0";
		clearScreen = false;
	}
	if (isDisplayEmpty())
		textInput.value = "3";
	else
		textInput.value += "3";
} // end function btn3Keypad_onclic()

/*
	handle button 4 keypad press.
*/
function btn4Keypad_onclick () {
	if (clearScreen == true) {
		textInput.value = "0";
		clearScreen = false;
	}
	if (isDisplayEmpty())
		textInput.value = "4";
	else
		textInput.value += "4";
} // end function btn4Keypad_onclick()


/*
	handle button 5 keypad press.
*/
function btn5Keypad_onclick () {
	if (clearScreen == true) {
		textInput.value = "0";
		clearScreen = false;
	}
	if (isDisplayEmpty())
		textInput.value = "5";
	else
		textInput.value += "5";
} // end method btn5Keypad_onclick()

// handle button 6 keypad press.
function btn6Keypad_onclick () {
	if (clearScreen == true) {
		textInput.value = "0";
		clearScreen = false;
	}
	if (isDisplayEmpty())
		textInput.value = "6";
	else
		textInput.value += "6";
} // end method button6Keypad_onclick()

// handle button 7 keypad press.
function btn7Keypad_onclick () {
	if (clearScreen == true) {
		textInput.value = "0";
		clearScreen = false;
	}
	if (isDisplayEmpty())
		textInput.value = "7";
	else
		textInput.value += "7";
} // end method button 

// handle button 8 keypad press.
function btn8Keypad_onclick () {
	if (clearScreen == true) {
		textInput.value = "0";
		clearScreen = false;
	}
	if (isDisplayEmpty())
		textInput.value = "8";
	else
		textInput.value += "8";
} // end function btn8Keypad_onclick()

// handle button 9 keypad press.
function btn9Keypad_onclick () {
	if (clearScreen == true) {
		textInput.value = "0";
		clearScreen = false;
	}
	if (isDisplayEmpty())
		textInput.value = "9";
	else
		textInput.value += "9";
} // end funtion btn9Keypad_onclick();

// handle button 0 keypad press.
function btn0Keypad_onclick () {
	if (clearScreen == true) {
		textInput.value = "0";
		clearScreen = false;
	}
	if (isDisplayEmpty())
		;
	else		
		textInput.value += "0";
} // end function btn0Keypad_onclick()

// handle button . keypad press.
function btnDotKeypad_onclick () {
	textInput.value += ".";
} // end function btnDotKeypad_onclick()

function btnEqualsKeypad_onclick () {
	var result = eval(textInput.value);
		
	textInput.value = result;
	clearScreen = true;
}

function btnDivideOperand_onclick () {
		textInput.value += "/";
		clearScreen = false;
}

function btnMultiplyOperand_onclick () {
		textInput.value += "*";
		clearScreen = false;
}

function btnSubtractOperand_onclick () {
		textInput.value += "-";
		clearScreen = false;
}

function btnPlusOperand_onclick() {
		textInput.value += "+";
		clearScreen = false;
}

// calculate sine of expression on display
function btnOperandSin_onclick(){
	var angleType = parseInt(document.myForm.radAngleType.value);
	var input = parseInt(textInput.value);
	var ans = 0;

	switch (angleType) {
		case ANGLE_TYPE_DEGREES: // if angle type is degrees, i will need to change type since by default trig functions in javascript work with radians
			var ans = Math.sin(eval(input) * Math.PI/180);
			break;
		case ANGLE_TYPE_RADIANS:
			ans = Math.sin(eval(input));
			break;
	} // end switch

	textInput.value = ans;
	clearScreen = true;
} // end function btnOperandSin_onclick()

function btnOperandCos_onclick(){ 
	var angleType = parseInt(document.myForm.radAngleType.value);
	var input = parseInt(textInput.value);
	var ans = 0;

	switch (angleType) {
		case ANGLE_TYPE_DEGREES: // if angle type is degrees, i will need to change type since by default trig functions in javascript work with radians
			var ans = Math.cos(eval(input) * Math.PI/180);
			break;
		case ANGLE_TYPE_RADIANS:
			ans = Math.cos(eval(input));
			break;
	} // end switch

	textInput.value = ans;
	clearScreen = true;
}

function btnOperandTan_onclick(){ 
	var angleType = parseInt(document.myForm.radAngleType.value);
	var input = parseInt(textInput.value);
	var ans = 0;

	switch (angleType) {
		case ANGLE_TYPE_DEGREES: // if angle type is degrees, i will need to change type since by default trig functions in javascript work with radians
			var ans = Math.tan(eval(input) * Math.PI/180);
			break;
		case ANGLE_TYPE_RADIANS:
			ans = Math.tan(eval(input));
			break;
	} // end switch

	textInput.value = ans;
	clearScreen = true;
}

function btnOperandAsin_onclick(){ 
	var angleType = parseInt(document.myForm.radAngleType.value);
	var input = parseInt(textInput.value);
	var ans = 0;

	switch (angleType) {
		case ANGLE_TYPE_DEGREES: // if angle type is degrees, i will need to change type since by default trig functions in javascript work with radians
			var ans = Math.asin(eval(input) * Math.PI/180);
			break;
		case ANGLE_TYPE_RADIANS:
			ans = Math.asin(eval(input));
			break;
	} // end switch

	textInput.value = ans;
	clearScreen = true;
}

function btnOperandAcos_onclick(){ 
	var angleType = parseInt(document.myForm.radAngleType.value);
	var input = parseInt(textInput.value);
	var ans = 0;

	switch (angleType) {
		case ANGLE_TYPE_DEGREES: // if angle type is degrees, i will need to change type since by default trig functions in javascript work with radians
			var ans = Math.acos(eval(input) * Math.PI/180);
			break;
		case ANGLE_TYPE_RADIANS:
			ans = Math.acos(eval(input));
			break;
	} // end switch

	textInput.value = ans;
	clearScreen = true;
}

function btnOperandAtan_onclick(){ 
	var angleType = parseInt(document.myForm.radAngleType.value);
	var input = parseInt(textInput.value);
	var ans = 0;

	switch (angleType) {
		case ANGLE_TYPE_DEGREES: // if angle type is degrees, i will need to change type since by default trig functions in javascript work with radians
			var ans = Math.atan(eval(input) * Math.PI/180);
			break;
		case ANGLE_TYPE_RADIANS:
			ans = Math.atan(eval(input));
			break;
	} // end switch

	textInput.value = ans;
	clearScreen = true;
}

function btnOperandLn_onclick() {
	var ans = Math.log(eval(textInput.value));
	
	textInput.value = ans;
	clearScreen = true;
}

function btnOperandLog_onclick() {
	var ans = Math.log10(eval(textInput.value));
	
	textInput.value = ans;
	clearScreen = true;
}

function btnOperandSqrt_onclick() {
	var ans = Math.sqrt(eval(textInput.value));
	
	textInput.value = ans;
	clearScreen = true;
}

function btnOperandCubeRoot_onclick() {
	var ans = Math.cbrt(eval(textInput.value));
	
	textInput.value = ans;
	clearScreen = true;
}

function btnOperandMod_onclick () {
		textInput.value += "%";
		clearScreen = false;
}

function btnOperandExp_onclick() {
	var ans = Math.exp(eval(textInput.value));
	
	textInput.value = ans;
	clearScreen = true;
}

function CE_onclick() {
	textInput.value = "0";
}

function backspace_onclick() {
	var str = textInput.value;
	var sub = str.substring(0, str.length - 1);

	if (sub.length == 0)
		textInput.value = "0";
	else
		textInput.value = sub;
}

// called when page is loaded, this displays the current time in a textbox
function startTime() {
    var today=new Date();
    var h=today.getHours(); 
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m); // checking if minute is < 0. if yes a zero is appended
    s = checkTime(s);
    var time = h + ":" + m  + ":" + s;
    document.myForm.txtTimeBox.value = time; // display time in textbox
    var t = setTimeout(function(){startTime()},500); // calls startTime() after 500 milliseconds
} // end function startTime()

// check if minutes, seconds  is < 10 so zero can be appended 
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
} // end function checkTime();