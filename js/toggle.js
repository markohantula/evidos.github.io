function setDisplayNone(id) {
  document.getElementById(id).style.display = "none";
}

function toggleDisplay(id) {
	if(document.getElementById(id).style.display == "none" ) {
		document.getElementById(id).style.display = "";
	}
	else {
		document.getElementById(id).style.display = "none";
	}
}
