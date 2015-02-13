'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function readURL(input , id) {

    // if (input.files && input.files[0]) {
    //     var reader = new FileReader();

    //     reader.onload = function (e) {
    //         $(id).attr('src', e.target.result);
    //     }

    //     reader.readAsDataURL(input.files[0]);
    // }

    if(input.files && input.files[0]) {
    	var reader = new FileReader();

        reader.onload = function (e) {
            $("#blah").attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }

    if(input.files && input.files[1]) {
    	var reader = new FileReader();

        reader.onload = function (e) {
            $("#blah2").attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[1]);
    }

    if(input.files && input.files[2]) {
    	var reader = new FileReader();

        reader.onload = function (e) {
            $("#blah3").attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[2]);
    }
}

$("#imgInp").change(function(){
    readURL(this , '#blah');
});

$("#imgInp2").change(function(){
    readURL(this , '#blah2');
});

$("#imgInp3").change(function(){
    readURL(this , '#blah3');
});

// http://www.ajaxblender.com/howto-resize-image-proportionally-using-javascript.html

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
  $("#story5").click(goToStory5);
  $("#story6").click(goToStory6);
  $("#newstory").click(goToNewStory);
  $("#published").click(goToPublished);
}

function logout(e) {
	window.location='/';
}
function goToNewStory(e) {
  console.log("newstory Link clicked!");
  window.location='/newstory';
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
function goToStory5(e) {
	console.log("story5 Link clicked!");
	window.location='/story5';
}
function goToStory6(e) {
	console.log("story6 Link clicked!");
	window.location='/story6';
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
function goToPublished(e) {
  window.location='/published';
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
