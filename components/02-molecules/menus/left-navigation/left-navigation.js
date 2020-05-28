jQuery(document).ready(function($) {

    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

  var toggle = document.querySelector("#toggle-sidebar-nav");

  // if (x > 920) {
  //     var sidebar = new StickySidebar('.main-sidebar', {
  //         topSpacing: 18,
  //         bottomSpacing: 36,
  //         containerSelector: '.main',
  //         innerWrapperSelector: '.left-nav'
  //     });
  // }

  toggle.addEventListener("click", function (e) {
      e.stopPropagation();
    //document.querySelector('.left-navigation').classList.toggle("is-open");
      //jQuery('.left-navigation').first().slideToggle(500);
      var nav = document.querySelector('.left-navigation');


      if (nav.style.display == "none" || nav.style.display == "") {
          gsap.fromTo(nav, {
              opacity: 0,
              display: "none"
          }, {
              opacity: 1,
              display: "block"
          });
          gsap.fromTo('.left-navigation__link', {
              x: 50
          }, {
              x: 0,
              stagger: 0.05,
              duration: .25,
              ease: "power4"
          })
      } else {
          nav.style.display = "none";
      }


  });

});