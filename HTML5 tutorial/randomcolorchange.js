function init(){
 
	// Get a reference to every h3 tag
	var h1tags = document.getElementsByTagName("h1");
	
	// When the first h1 tag is clicked call the function changeColor
	h1tags[0].onclick = changeColor;
 
}
 
function changeColor(){
 
	// this refers to the item clicked and changes the content in the tag to Click Again
	this.innerHTML = "Click Again";
	
	// Generates a random color hex code
	var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
	
	// Change the color of the element to the random color
	this.style.color = randomcolor;
 
}
 
function toggleImg(){
 
	var img = document.getElementById("danceImg");
	var isImgVisible = img.style.visibility !== "visible";
	img.style.visibility = isImgVisible ? "visible" : "hidden";
 
}
 
// When the script runs execute the function init()
onload = init;