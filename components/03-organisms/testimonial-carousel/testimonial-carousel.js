jQuery('body').imagesLoaded(function() {
  var elem = jQuery('.testimonials');

  jQuery(elem).each(function(i, el) {
    new Flickity( el, {
      setGallerySize: true,
      fade: true,
      prevNextButtons: true
    });
  });

});
