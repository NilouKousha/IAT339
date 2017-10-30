'use strict';

  function showOrHide() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }




  // Get the modal
  var modal = document.getElementById('shopping-detail-modal');

  // Get the button that opens the modal
  var btn = document.getElementById("add-to-cart-submit");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  function openModelForShoppingCart() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  function closeModalForShoppingCart() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }




var item1 = document.getElementById('modal-shopping-summery-modal1');
var item2 = document.getElementById('modal-shopping-summery-modal2');
var item3 = document.getElementById('modal-shopping-summery-modal3');
var view = document.getElementById('view-shopping-bag');
var subtotal= document.getElementById('subtotal');
var result = document.getElementById('result');
function removeElement1(){
  item1.style.display = "none";
  view.textContent = "View Shopping Bag(2)";
  subtotal.textContent = "CAD $1200";
}
function removeElement2(){
  item2.style.display = "none";
  view.textContent = "View Shopping Bag(1)";
  subtotal.textContent = "CAD $750";
}
function removeElement3(){
  item3.style.display = "none";
  result.style.display = "none";
}
