'use strict';
console.log("Javascript is running");


var width = window.innerWidth;
console.log("Window width: " + width + "px");

var slidingMenuIsExpanded = false;



// This finds us the first element with the ID of 'nav-toggle', and then casts it into a variable for later access.
// var navToggle = document.querySelector("#nav-toggle");
// var navItems = document.querySelector("#nav-items");
// var navFirstItem = document.querySelector("#nav-items a");




var hamburgerIcon = document.getElementById('hamburgur-icon');
var slidingMenu = document.getElementById('side-menu');
var horizontalnavigationBox = document.getElementById('horizontal-navigation-links');
var slidingitems = document.getElementById('nav-menu-sliding-items');

window.addEventListener("resize", function() {
  // console.log("window is resizing");
  hideORShow();
} );

function hideORShow(){
  width = window.innerWidth;
  if(width > 750){
    console.log("Inside of hideOrShow function - Window width is greater than 500px, hiding hamburger");
    slidingMenu.style.visibility = "hidden";
    hamburgerIcon.style.visibility = "hidden";
    horizontalnavigationBox.style.visibility="visible";

  }
  else{
    console.log("Inside of hideOrShow function - Window width is less than 500px, revealing hamburger");
    slidingMenu.style.visibility = "visible";
    horizontalnavigationBox.style.visibility = "hidden";
    hamburgerIcon.style.visibility = "visible";
    slidingitems.style.visibility="hidden";
  }
}

function openSlideMenu(){
  console.log("hamburger btn clicked");
  if(slidingMenuIsExpanded==false){
    slidingitems.style.visibility = "visible";
    slidingMenuIsExpanded=true;
  }
  else{
    slidingitems.style.visibility = "hidden";
    slidingMenuIsExpanded=false;
  }
}

function closeSlideMenu(){
  console.log("close btn clicked");
    slidingMenu.style.visibility = "hidden";
}
