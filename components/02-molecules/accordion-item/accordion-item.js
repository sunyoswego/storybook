(function($) {
    Drupal.behaviors.accordion = {
        attach: function (context, settings) {

            $(".accordion-toggle").each(function (index, el) {
                $(this).attr("aria-expanded", false);
                $(this).click(function (event) {
                    event.preventDefault();
                    $(this).toggleClass("open");
                    if ($(this).hasClass("open")) {
                        $(this).attr("aria-expanded", true);
                    } else {
                        $(this).attr("aria-expanded", true);
                    }

                    $(this).siblings(".accordion-content").slideToggle(500);
                });
            });

            $(".accordion-toggle").keyup(function (e) {
                if (e.keyCode == 13) {
                    $(this).trigger("click");
                }
            });

        }
    };
})(jQuery);
