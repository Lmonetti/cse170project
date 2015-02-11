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
  $("#story1").click(goToStory1);
  $("#story2").click(goToStory2);
  $("#story3").click(goToStory3);
  $("#story4").click(goToStory4);
}

function logout(e) {
	window.location='/';
}
function goToStory1(e) {
	console.log("story1 Link clicked!");
	window.location='/story1';
}
function goToStory2(e) {
	console.log("story2 Link clicked!");
	window.location='/story2';
}
function goToStory3(e) {
	console.log("story3 Link clicked!");
	window.location='/story3';
}
function goToStory4(e) {
	console.log("story4 Link clicked!");
	window.location='/story4';
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
