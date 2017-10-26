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
    // navToggle.classList.remove("hidden");
    // navToggle.setAttribute("aria-hidden", "false");
    // navItems.classList.add("hidden");
    // navItems.setAttribute("aria-hidden", "true");
    // navItems.setAttribute("aria-labelledby", "nav-toggle");
}

//
// navToggle.addEventListener("click",
// 	/*
// 		Once the user has clicked on the element, we have - in this case - an anonymous (nameless) function that runs a series of statements for us.
// 	*/
// 	function() {
// 		console.log("#nav-toggle has been clicked.");
//
// 		/*
// 			Because we do not know for sure if the navigation items are showing (or not) when a user clicks on the button, we should test and act on both conditions. The if/else statement below checks if #nav-items has a class of 'hidden' using the 'classList.contains(...)' method and acts accordingly.
// 		*/
// 		if ( navItems.classList.contains("hidden") ) {
// 			console.log("#nav-items are hidden, showing them now.");
//
// 			/*
// 				We want to remove the 'hidden' class to ensure that the navigation items become visible.
// 			*/
// 			navItems.classList.remove("hidden");
//
// 			/*
// 				Since the menu is now visible, we want to also set the navigation items as visible (to accessibility devices) and the #nav-toggle to understand that the navigation has been expanded.
// 			*/
// 			navItems.setAttribute("aria-hidden", "false");
// 			navToggle.setAttribute("aria-expanded", "true");
//
// 			/*
// 				To assist accessibility devices interpret the menu correctly, refocusing keyboard navigation on the first menu item (once expanded) is worthwhile. This is where selecting our first navigation item in a variable and using the 'focus' method on it allows us to do so.
// 			*/
// 			navFirstItem.focus();
// 		}
// 		/*
// 			Otherwise, if the navigation items are already showing...
// 		*/
// 		else {
// 			console.log("#nav-items are showing, hiding them now.");
//
// 			/*
// 				We want to remove add 'hidden' class to ensure that the navigation items are hidden.
// 			*/
// 			navItems.classList.add("hidden");
//
// 			/*
// 				Since the menu is now hidden, we want to also set the navigation items as hidden (to accessibility devices) and the #nav-toggle to understand that the navigation has been collapsed.
// 			*/
// 			navItems.setAttribute("aria-hidden", "true");
// 			navToggle.setAttribute("aria-expanded", "false");
// 		}
// 	}
// );


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
