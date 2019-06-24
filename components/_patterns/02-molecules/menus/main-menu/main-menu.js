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

(function () { // REMOVE IF DRUPAL.

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
  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
        menu.classList.toggle('main-nav--open');
      }, false);
    });
  }

})(); // REMOVE IF DRUPAL.

// })(Drupal); // UNCOMMENT IF DRUPAL.
