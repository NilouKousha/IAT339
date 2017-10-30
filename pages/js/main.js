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




var item = document.getElementById('modal-shopping-summery-modal');
function removeElement(){
  item.style.display = "none";
}
