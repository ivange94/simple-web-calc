/*
	Author: Ivange Larry Ndumbe
	Matricule: FE13A096
*/

/*
	basic.js
	this javascript file handles the function the basic calculator. Advanced funtionality is handled in advanced.js
	
	You would notice that when the calculator is in basic, it only funtions as a single line porpo calculator, also in
	basic mode answers a truncated because this was the teachers requirements. Also the decimal point sign does not work in basic mode 
	
*/

var textInput = document.myForm.txtInput; // this variable will represent calculator dislay
var stored_variable = 0; // holds intermidiary results
var stored_operand ="+"; // holds operand
var clearScreen = false; // this variable will be used to determing whether to clear screen before writing to it
								 // for example after evaluating a calculation and the user presses a number, the calculator screen will clear before
								 // writing to it
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

// perform division
function btnDivideOperand_onclick () {
	calculate(); // evalute previous expression
	stored_operand = "/";
	textInput.value = stored_variable;
	clearScreen = true; // screen will be cleared before next data input
} // end funtion btnDivideOperand_onclick()

// perform multiplication
function btnMultiplyOperand_onclick () {
	calculate(); // evalute previous expression
	stored_operand = "*";
	textInput.value = stored_variable;
	clearScreen = true; // screen will be cleared before next data input
} // end function btnMultiplyOperand_onclick()

// perform subtraction 
function btnSubtractOperand_onclick () {
	calculate(); // evalute previous expression
	stored_operand = "-";
	textInput.value = stored_variable;
	clearScreen = true; // screen will be cleared before next data input
} // end function btnSubtractOperand_onclick()

// perform addition
function btnPlusOperand_onclick() {
	
	calculate(); 
	stored_operand = "+";
	textInput.value = stored_variable; // sets display to result of calculation
	clearScreen = true; // clean will cleared before next data input
} // end function btnPlusOperand_onclick()

// evaluate expression on display
function calculate() {
	var input = parseInt(textInput.value);
	
	switch(stored_operand) { 
		case "+":
			stored_variable = stored_variable + input;
			break;
		case "-":
			stored_variable = stored_variable - input;
			break;
		case "*":
			stored_variable = stored_variable * input;
			break;
		case "/":
			stored_variable = stored_variable / input;
			break;
	}
	stored_variable = parseInt(stored_variable);
} // end function calculate()

// clear display and reinitialize all variables
function CE_onclick() { // clear screen when the CE button is clicked and all variables are set to their initial state
	textInput.value = "0"; 
	stored_variable = 0;
	stored_operand = "+";
} // end function CE_onclick()

// delete one character to the left
function backspace_onclick() {
	var str = textInput.value; // gets string from display
	var sub = str.substring(0, str.length - 1); // deletes last character by creating substring that has one character less

	if (sub.length == 0) { // if after creating substring and length reduces to zero, there for character deleted was the last character
									// and the display will be left empty. but we want the display to show '0' indicating that its empty
		textInput.value = "0"; // set value of display to '0'

	}
	else
		textInput.value = sub;
} // end function backspace_onclick()

// handle event when the equals button is clicked
function btnEqualsKeypad_onclick () {
	var input = parseInt(textInput.value); // convert text to integer
	
	calculate(); // evaluates expression based on stored_operand and stored_variable
	textInput.value = stored_variable; // set display to result of calculation
	stored_variable = 0; // makes sure the value of previous calculation does not affect future calculations
	stored_operand = "+"; // will be used in the next operation
	clearScreen = true; // screen will be cleared before next data is written to it
} // end function btnEqualsKeypad_onclick()