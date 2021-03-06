/*
	Author: Ivange Larry Ndumbe
	Matricule: FE13A096
*/

var txtInput = document.getElementById("txtInput");

txtInput.style.backgroundColor = 'Black';
txtInput.style.color = 'white';
txtInput.style.height = '50px';
txtInput.style.fontSize = "18px"
txtInput.style.textAlign = 'right';
txtInput.style.width = '99%';



/*
	This method checks whether the display is empty
	
	This check is necessary because, when display is empty we have a 0 on the display, so if i try writing say 1 to the display 
	without clearing it, i will end up with 01 which is not what i want
*/
function isDisplayEmpty() {
	if (textInput.value.localeCompare("0") == 0) // use function localeCompare() to check if the only value on dislay is a '0'. that is, the display is empty
		return true; // returns true if display is empty
	else
		return false; // returns false if dislay is not empty
} // end of function is isDisplayEmpty