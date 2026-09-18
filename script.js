// Frick's Fish and Chips — small interactive enhancements
(function () {
  "use strict";

  // Current year in the footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Mobile nav toggle
  var burger = document.getElementById("nav-burger");
  var links = document.getElementById("nav-links");

  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.classList.toggle("active", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after choosing a link (mobile-friendly)
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        burger.classList.remove("active");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Add a subtle scroll state to the nav once the page moves
  var nav = document.getElementById("top-nav");
  if (nav && window.addEventListener) {
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();