/**
 * @file
 * A JavaScript file containing the main menu functionality (small/large screen)
 *
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth


(function ($) { // UNCOMMENT IF DRUPAL.

  Drupal.behaviors.mainMenu = {
    attach: function (context) {


      // Use context instead of document IF DRUPAL.
      var toggle_expand = context.getElementById('toggle-expand');
      var sidebarmenu = context.querySelector('.left-navigation');
      var menu = context.querySelector('.main-nav');
      if (sidebarmenu) {
        var expand_menu = sidebarmenu.getElementsByClassName('expand-sub');
        // Expose mobile sub menu on click.
        for (var i = 0; i < expand_menu.length; i++) {
          expand_menu[i].addEventListener('click', function (e) {
            var menu_item = e.currentTarget;
            var sub_menu = menu_item.nextElementSibling;
            menu_item.classList.toggle('expand-sub--open');
            //jQuery(menu_item).slideToggle(500);
            //sub_menu.classList.toggle('sub-open');
            $(sub_menu).slideToggle(500);
          });
        }
      }

      //console.log("hello");
      //Mobile Menu Show/Hide.
      // toggle_expand.addEventListener('click', function (e) {
      //   toggle_expand.classList.toggle('toggle-expand--open');
      //   menu.classList.toggle('main-nav--open');
      // });



      /**
       * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
       *
       * @private
       * @author Todd Motto
       * @link https://github.com/toddmotto/foreach
       * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
       * @callback requestCallback      callback   - Callback function for each iteration.
       * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
       * @returns {}
       */

      var hamburgers = context.querySelectorAll(".hamburger");
      if (hamburgers.length > 0) {
        $(hamburgers).each(function (i, hamburger) {
          hamburger.addEventListener("click", function () {
            $(this).toggleClass("is-active");
            //menu.classList.toggle('main-nav--open');
            $(menu).slideToggle(500);
          });
        });
      }



    }
  };
})(jQuery);
