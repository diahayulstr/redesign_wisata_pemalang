// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Search Button
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

/**
   * Open and close the search form.
   */
const searchOpen = document.querySelector('.js-search-open');
const searchClose = document.querySelector('.js-search-close');
const searchWrap = document.querySelector(".js-search-form-wrap");

searchOpen.addEventListener("click", (e) => {
  e.preventDefault();
  searchWrap.classList.add("active");
});

searchClose.addEventListener("click", (e) => {
  e.preventDefault();
  searchWrap.classList.remove("active");
});

/**
   * Mobile nav toggle
   */

const mobileNavToogleButton = document.querySelector('.mobile-nav-toggle');

if (mobileNavToogleButton) {
  mobileNavToogleButton.addEventListener('click', function(event) {
    event.preventDefault();
    mobileNavToogle();
  });
}

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavToogleButton.classList.toggle('bi-list');
  mobileNavToogleButton.classList.toggle('bi-x');
}

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('#navbar a').forEach(navbarlink => {

  if (!navbarlink.hash) return;

  let section = document.querySelector(navbarlink.hash);
  if (!section) return;

  navbarlink.addEventListener('click', () => {
    if (document.querySelector('.mobile-nav-active')) {
      mobileNavToogle();
    }
  });
});

/**
 * Toggle mobile nav dropdowns
 */
const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

navDropdowns.forEach(el => {
  el.addEventListener('click', function(event) {
    if (document.querySelector('.mobile-nav-active')) {
      event.preventDefault();
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('dropdown-active');

      let dropDownIndicator = this.querySelector('.dropdown-indicator');
      dropDownIndicator.classList.toggle('bi-chevron-up');
      dropDownIndicator.classList.toggle('bi-chevron-down');
    }
  })
});

/**
   * Initiate glightbox
   */
const glightbox = GLightbox({
  selector: '.glightbox'
});

// Modal Photos
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}