// ============================================
// GBHS Pilot Dadu — Site JS
// Handles mobile nav, FAQ accordions, gallery
// filters, and the newsletter/contact form notes.
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector("nav.main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded);
    });
  }

  // FAQ accordions
  document.querySelectorAll(".accordion-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".accordion-item");
      var wasOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".accordion-item").forEach(function (i) {
        i.classList.remove("open");
        i.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Gallery filter
  var filterButtons = document.querySelectorAll(".gallery-filter button");
  var galleryItems = document.querySelectorAll(".gallery-grid [data-category]");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var category = btn.getAttribute("data-filter");
      galleryItems.forEach(function (item) {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Forms without a backend yet: show a friendly confirmation instead of failing silently
  document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-submit-note");
      if (note) {
        note.textContent = "Thanks — this form isn't wired up to send yet. Add form handling (see README) to start receiving these.";
        note.style.color = "#2f6b4f";
      }
    });
  });
});
