/**
 * 
 */

var coverImage = document.querySelector('#cover');

coverImage.onclick = function(){
	alert('click!');
}

coverImage.onmouseover = function() {
	coverImage.style.border = "5px solid black";
}

coverImage.onmouseout = function() {
	coverImage.style.border = "";
}