'use strict';

var flkty = new Flickity('.resource-cards', {
    // options
    cellAlign: 'center',
    contain: false,
    accessibility: true
});
"use strict";

// UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
Drupal.behaviors.accordion = {
  attach: function attach(context, settings) {

    //(function() {
    // REMOVE IF DRUPAL

    "use strict";

    jQuery(".accordion-toggle").each(function (index, el) {
      jQuery(this).attr("aria-expanded", false);
      jQuery(this).click(function (event) {
        event.preventDefault();
        jQuery(this).toggleClass("open");
        if (jQuery(this).hasClass("open")) {
          jQuery(this).attr("aria-expanded", true);
        } else {
          jQuery(this).attr("aria-expanded", true);
        }
        changeIcon(jQuery(this));
        jQuery(this).siblings(".accordion-content").slideToggle(500);
      });
    });

    function changeIcon(lol) {
      if (lol.find(".fa").hasClass("fa-plus")) {
        lol.find(".fa").removeClass("fa-plus").addClass("fa-minus");
      } else {
        lol.find(".fa").removeClass("fa-minus").addClass("fa-plus");
      }
    }

    jQuery(".accordion-toggle").keyup(function (e) {
      if (e.keyCode == 13) {
        jQuery(this).trigger("click");
      }
    });
    //})(); // REMOVE IF DRUPAL

    // UNCOMMENT IF DRUPAL
  }
};
'use strict';

/**
 * @file
 * A JavaScript file containing the main menu functionality (small/large screen)
 *
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth


// (function (Drupal) { // UNCOMMENT IF DRUPAL.
//
//   Drupal.behaviors.mainMenu = {
//     attach: function (context) {

(function () {
  // REMOVE IF DRUPAL.

  'use strict';

  // Use context instead of document IF DRUPAL.
  // var toggle_expand = document.getElementById('toggle-expand');

  var menu = document.getElementById('main-nav');
  // var expand_menu = menu.getElementsByClassName('expand-sub');
  // console.log("hello");
  // Mobile Menu Show/Hide.
  // toggle_expand.addEventListener('click', function (e) {
  //   toggle_expand.classList.toggle('toggle-expand--open');
  //   menu.classList.toggle('main-nav--open');
  // });
  //
  // // Expose mobile sub menu on click.
  // for (var i = 0; i < expand_menu.length; i++) {
  //   expand_menu[i].addEventListener('click', function (e) {
  //     var menu_item = e.currentTarget;
  //     var sub_menu = menu_item.nextElementSibling;
  //
  //     menu_item.classList.toggle('expand-sub--open');
  //     sub_menu.classList.toggle('main-menu--sub-open');
  //   });
  // }

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
  var forEach = function forEach(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) {
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    } else for (var e = 0, l = t.length; l > e; e++) {
      o.call(r, t[e], e, t);
    }
  };
  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
        menu.classList.toggle('main-nav--open');
      }, false);
    });
  }
})(); // REMOVE IF DRUPAL.

// })(Drupal); // UNCOMMENT IF DRUPAL.
'use strict';

(function () {

  'use strict';

  var el = document.querySelectorAll('.tabs');
  var tabNavigationLinks = document.querySelectorAll('.tabs__link');
  var tabContentContainers = document.querySelectorAll('.tabs__tab');
  var activeIndex = 0;

  /**
   * handleClick
   * @description Handles click event listeners on each of the links in the
   *   tab navigation. Returns nothing.
   * @param {HTMLElement} link The link to listen for events on
   * @param {Number} index The index of that link
   */
  var handleClick = function handleClick(link, index) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      goToTab(index);
    });
  };

  /**
   * goToTab
   * @description Goes to a specific tab based on index. Returns nothing.
   * @param {Number} index The index of the tab to go to
   */
  var goToTab = function goToTab(index) {
    if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
      tabNavigationLinks[activeIndex].classList.remove('is-active');
      tabNavigationLinks[index].classList.add('is-active');
      tabContentContainers[activeIndex].classList.remove('is-active');
      tabContentContainers[index].classList.add('is-active');
      activeIndex = index;
    }
  };

  /**
   * init
   * @description Initializes the component by removing the no-js class from
   *   the component, and attaching event listeners to each of the nav items.
   *   Returns nothing.
   */
  for (var e = 0; e < el.length; e++) {
    el[e].classList.remove('no-js');
  }

  for (var i = 0; i < tabNavigationLinks.length; i++) {
    var link = tabNavigationLinks[i];
    handleClick(link, i);
  }
})();
//# sourceMappingURL=scripts-styleguide.js.map
