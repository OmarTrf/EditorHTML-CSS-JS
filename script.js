function playCode(){
	var code = document.getElementById('Code').value;
	document.getElementById("output").innerHTML = code;
}
function removeCode(){
	document.getElementById("output").innerHTML="";
}