// UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
 Drupal.behaviors.accordion = {
  attach: function (context, settings) {

//(function() {
  // REMOVE IF DRUPAL

  "use strict";

  jQuery(".accordion-toggle").each(function(index, el) {
    jQuery(this).attr("aria-expanded", false);
    jQuery(this).click(function(event) {
      event.preventDefault();
      jQuery(this).toggleClass("open");
      if (jQuery(this).hasClass("open")) {
        jQuery(this).attr("aria-expanded", true);
      } else {
        jQuery(this).attr("aria-expanded", true);
      }
      changeIcon(jQuery(this));
      jQuery(this)
        .siblings(".accordion-content")
        .slideToggle(500);
    });
  });

  function changeIcon(lol) {
    if (lol.find(".fa").hasClass("fa-plus")) {
      lol
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    } else {
      lol
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    }
  }

  jQuery(".accordion-toggle").keyup(function(e) {
    if (e.keyCode == 13) {
      jQuery(this).trigger("click");
    }
  });
//})(); // REMOVE IF DRUPAL

// UNCOMMENT IF DRUPAL
 }
};
