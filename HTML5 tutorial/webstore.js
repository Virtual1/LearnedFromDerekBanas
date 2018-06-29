function init(){

	// Check if we can get a location
	if(navigator.geolocation){
	
		// Notify the user we are trying to find their location
		document.getElementById("notify").innerHTML = "We are trying to find you";
		
		// Declare what function to call on success and error
		navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
	
	} else {
	
		// Notify the user that we can't get their location
		document.getElementById("notify").innerHTML = "Your browser doesn't support geolocation";
	
	}
}

function successFunc(pos){

	// Get the lat and long and output it
	var lat = pos.coords.latitude;
	var long = pos.coords.longitude;
	document.getElementById("notify").innerHTML = "You are at Lat: " +
		lat + " Long: " + long;

}

// Notify the user that an error occurred
function errorFunc(pos){

	document.getElementById("notify").innerHTML = "Error Occurred Locating You";

}

function setName(){

	// Get the value stored in the input element
	var userName = document.getElementById("yourName").value;
	
	// Check to make sure it isn't empty
	if(userName === "") return false;
	
	// Store the value with the key name
	localStorage.setItem("name", userName);
	
	// Change the text in the input to show the name was saved
	document.getElementById("yourName").value = "Name Saved";

}

function getName(){

	// Check that a value was saved
	if(localStorage.getItem("name" === null)) return false;
	
	// Get the value stored and display it
	document.getElementById("yourName").value = "Name Stored : " +
		localStorage.getItem("name");

}

function removeName(){

	// Check that a value was saved
	if(localStorage.getItem("name") === null) return false;
	
	// Remove the value associated with the key name
	localStorage.removeItem("name");
	
	// Notify the user that the value was deleted
	document.getElementById("yourName").value = "Name Removed";

}

onload = init;