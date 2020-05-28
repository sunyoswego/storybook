($ => {
    Drupal.behaviors.status = {
        attach() {
          $(".small-feature").fitVids();
        },
    };
})(jQuery);
