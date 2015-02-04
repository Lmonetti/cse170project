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
  // $("a.thumbnail").click(projectClick);
  $("#submitBtn").click(updateProject); 
  $("#logoutBtn").click(logout); 
  $("#registerBtn").click(goToRegister); 
  $("#TopS").click(goToTopStories);
  $("#NewsFeed").click(goToNewsFeed);
  $("#Publish").click(goToPublish);
  $("#Profile").click(goToProfile);

}

function logout(e) {
	window.location='/';
}

function goToTopStories(e) {
	console.log("Top Stories Link clicked!");
	window.location='/login';
}

function goToNewsFeed(e) {
	window.location='/newsfeed';
}

function goToPublish(e) {
	window.location='/publish';
}

function goToProfile(e) {
	window.location='/profile';
}

function updateProject(e) {
  window.location='/login';
}

function goToRegister(e) {
  window.location='/register';
}

function projectClick(e) {
  
}
