

function redirect(){
	var text = document.getelementById("search").value;

	document.location.assign("search.php?phrase="+text);
}