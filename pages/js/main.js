'use strict';
console.log("Javascript is running");


var width = window.innerWidth;
console.log("Window width: " + width + "px");

var slidingMenuIsExpanded = false;



// This finds us the first element with the ID of 'nav-toggle', and then casts it into a variable for later access.
// var navToggle = document.querySelector("#nav-toggle");
// var navItems = document.querySelector("#nav-items");
// var navFirstItem = document.querySelector("#nav-items a");



if(width < 500){
  	console.log("Window width is less than 500px, collapsing menu.");
}




var hamburgerIcon = document.getElementById('hamburgur-icon');
var slidingMenu = document.getElementById('side-menu');
var horizontalnavigationBox = document.getElementById('horizontal-navigation-links');




function hideORShow(){
  if(width > 500){
    console.log("Inside of hideOrShow function - Window width is greater than 500px, hiding hamburger");
    // hamburgerIcon.style.visibility = "hidden";
    slidingMenu.style.visibility = "hidden";
    // hamburgerIcon.style.width = "0";
    // hamburgerIcon.style.height = "0";
    slidingMenu.style.width = "0";
    slidingMenu.style.height = "0";

  }
  else{
    console.log("Inside of hideOrShow function - Window width is less than 500px, hiding hamburger");
    horizontalnavigationBox.style.visibility = "hidden";
    horizontalnavigationBox.style.width = "0";
    horizontalnavigationBox.style.height = "0";
    hamburgerIcon.style.visibility = "visible";
    slidingMenu.style.width = "0";
    slidingMenu.style.height = "0";
  }
}

function openSlideMenu(){
  console.log("hamburger btn clicked");
  if(slidingMenuIsExpanded==false){
    slidingMenu.style.visibility = "visible";
    slidingMenuIsExpanded=true;
  }
  else{
    slidingMenu.style.visibility = "hidden";
    slidingMenuIsExpanded=false;
  }
}

function closeSlideMenu(){
  console.log("close btn clicked");
    slidingMenu.style.visibility = "hidden";
}
