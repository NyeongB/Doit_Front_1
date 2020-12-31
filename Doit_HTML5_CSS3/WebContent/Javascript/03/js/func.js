/**
 * 
 */

function func()
{
	var num1 = document.querySelector("#text1").value;
	var num2 = document.querySelector("#text2").value;
	
	
	
	document.querySelector("#span1").innerHTML = num1;
	document.querySelector("#span2").innerHTML = num1 - num1 * num2 / 100;
	
	
}