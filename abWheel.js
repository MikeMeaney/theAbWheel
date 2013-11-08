//abWheel Proof of Concept.
//Mike Meaney 2013
//San Diego, CA

//varibles to hold the durration data	
var durr;
var durrString;
//Ditto for reps....
var reps;
var repsString;
//...and for when the user pauses...
var pauses;
var pausesString;
//....even for how long the durration is between wheel rotations...
var durrSpan;
var repsSpan ;
//...Last but not least, variables for goal tracking.
var goal;
var goalSpan;
var remainingReps;

//Okay, now that I've created an egregious number of global variables (I did that so I 
// can check on them using the browser's console. As this evolves, they will be placed 
// into corresponding functions as needed.
$(document).ready(function(){
	//Create the DOM objects that the Firebase data will be placed into
	durrSpan = $('#durr');
	repsSpan = $('#reps');
	pausesSpan = $('#pauses');
	
	//Add the labels to those DOM elements
    durrSpan.html("<p> Durration: </p>");
    repsSpan.html("<p> Reps: </p>");
    
    //This function looks for when the TARGET (aka goal) number of reps has changed 
	//so that it can display that data on the web page. This is also were the 
	//"goal blocks" are drawn to the page down at the bottom. 
		var dataRef = new Firebase('https://catxco.firebaseio.com/goal/targetReps');
		dataRef.on('value', function (snapshot) {
   		goal = snapshot.val();
    	//console.log("Pauses counted: "+pauses); // debugging
   		var goalString = pauses.toString();
   		var goalSpan = $('#goalDisplay');
   		goalSpan.html("<p> Current goal is: " + goal + " reps</p>");
	});

	//This function watches for changes for reps completed and updates the goal blocks
	var dataRef = new Firebase('https://catxco.firebaseio.com/wheel/reps');
		
		dataRef.on('value', function (snapshot) {
    	reps = snapshot.val();
    	repsString = reps.toString();
    	repsSpan.html("<p> Reps: " + repsString + "</p>");
    	console.log("Reps completed: "+reps);
    	
    	//Here, is were the script is watching for the number of reps completed to reach the goal. 
    	if(reps > goal){
    		alert("Hey buddy, time to cool off that six pack of yours. You just hit your goal");
    	}
    	
    	remainingReps = goal - reps;  //calculate the remaining number of reps
    	
    	console.log("There are "+remainingReps+" reps left to do");
   		
   		$('#goalGame').empty();
   		for(var i=0; i<remainingReps; i++){
   			var goalBlock = $('<div/>', {class: 'goalBlock', text: i+1, id: i+1});
   			console.log("goal block added");
			$('#goalGame').append(goalBlock);
   		}
	});
	
	//This function is watching the wheel durration. It's the number of milliseconds that have lapsed since the last
	//passing of the magnet over the Hall effect sensor.
	var dataRef = new Firebase('https://catxco.firebaseio.com/wheel/durration');
		dataRef.on('value', function (snapshot) {
   		durr = snapshot.val();
    	//console.log("Durration between rotations: "+durr);
   		durrString = durr.toString();
   		durrSpan.html("<p> Durration: " + durrString + "</p>");
	});
	
	//This function is watching for when the user has paused their movement. It rolls over at one, indicating that
	//the user has paused at the starting and extended position, representing a single rep.
	var dataRef = new Firebase('https://catxco.firebaseio.com/wheel/pauses'); 
		dataRef.on('value', function (snapshot) {
   		pauses= snapshot.val();
    	//console.log("Pauses counted: "+pauses); // debugging
   		pausesString = pauses.toString();
   		pausesSpan.html("<p> Pauses: " + pausesString + "</p>");
	});
	
	
	//This functions watches for the submit button on the "Enter Goal" field to be clicked.
	//Once it is, this function will then send the data in that field to FireBase. Yay! Goals!
	$('#goalButton').click(function(){
		console.log("Button clicked");
		var dataRef = new Firebase('https://catxco.firebaseio.com/goal');
		var goalInput = parseInt($('#goalInput').val());
		console.log(goalInput);
		dataRef.update({targetReps : goalInput});
	});

});

