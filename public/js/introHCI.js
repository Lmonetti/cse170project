'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		
    
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
  $("#submitBtn").click(updateProject); 
  $("#registerBtn").click(goToRegister); 

}

function updateProject(e) {
  window.location='/login';
}

function goToRegister(e) {
  window.location='/register';
}

function projectClick(e) {
  
}
