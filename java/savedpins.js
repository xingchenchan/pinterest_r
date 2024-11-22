import {serve} from '@hono/node-server'
import {Hono} from 'hono'

/* Image Specific Function */

function pinclick() {
    console.log("pin was clicked");
    const pin = document.querySelector(pin);

    pin.addEventListener()
}


/* Dropdown Menu JavaScript */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
    } else {
        a[i].style.display = "none";
        }
    }
}
