jQuery(function($) {

  var stopVideo = function ( element ) {
    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video' );
    if ( iframe ) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    if ( video ) {
      video.pause();
    }
  };

    var iframe = document.querySelectorAll('.hero iframe');
    var videoblocks = document.querySelectorAll('.video-blocks iframe')
    var players = [];
    var paused = false;

    if (Cookies.get('reduced-motion') == 'true') {
      paused = true;
    }

    iframe.forEach(function(el) {
      console.log("found a hero video");
      players.push(new Vimeo.Player(el));
    });

    videoblocks.forEach(function(el) {
      console.log("found those video blocks");
      players.push(new Vimeo.Player(el));
    });

    console.log("REDUCED MOTION COOKIE SET: " + Cookies.get('reduced-motion'));

    if (iframe.length) {
      $('.hero').append('<button class="video-controls"><svg class="icon icon-pause2">\n' +
          '  <use xlink:href="/themes/custom/sunyoswego/svg/symbol-defs.svg#icon-pause2"></use>\n' +
          '</svg> </button>');
    }

    if (videoblocks.length) {
      $('.video-blocks').append('<button class="video-controls"><svg class="icon icon-pause2">\n' +
          '  <use xlink:href="/themes/custom/sunyoswego/svg/symbol-defs.svg#icon-pause2"></use>\n' +
          '</svg> </button>');
    }


    if (paused) {
      players.forEach(function(el) {
        el.on('play', function() {
          el.pause();
        });
        // el.ready().then(function() {
        //   console.log("VIDEO LOADED");
        //   console.log("Pausing " + el.element.src);
        //   el.pause().then(function() {
        //     console.log("Video paused successfully");
        //   }).catch(function(error) {
        //     console.log("ERROR: ");
        //     console.log(error);
        //     console.log("\n\n");
        //   });
        // });
      });
      $('button.video-controls').each(function() {
        $(this).html('<svg class="icon icon-play4">\n' +
            '  <use xlink:href="/themes/custom/sunyoswego/svg/symbol-defs.svg#icon-play4"></use>\n' +
            '</svg> ');
      });
    } else {
      gsap.from('.hero__content', {
        opacity: 0,
        duration: 2,
        y: 50,
        ease: "power4"
      });
    }



    if (videoblocks.length || iframe.length) {
      $('button.video-controls').each(function () {
        $(this).click(function() {
          if (!paused) {
            players.forEach(function(el) {
              el.on('play', function() {
                el.pause();
              });
              el.pause();
              $('button.video-controls').html('<svg class="icon icon-play4">\n' +
                  '  <use xlink:href="/themes/custom/sunyoswego/svg/symbol-defs.svg#icon-play4"></use>\n' +
                  '</svg> ');
              Cookies.set('reduced-motion', 'true');
              paused = true;
            });
          } else {
            players.forEach(function(el) {
              el.off('play');
              el.play();
              $('button.video-controls').html('<svg class="icon icon-pause2">\n' +
                  '  <use xlink:href="/themes/custom/sunyoswego/svg/symbol-defs.svg#icon-pause2"></use>\n' +
                  '</svg> ');
              Cookies.set('reduced-motion', 'false');
              paused = false;
            });
          }
        });
      });

    }


});