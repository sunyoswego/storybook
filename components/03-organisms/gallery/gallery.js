jQuery('body').imagesLoaded(function() {
    var elem = document.querySelectorAll('.gallery');

    for (var i = 0; i < elem.length; i++) {
        new Flickity( elem[i], {
            // options
            contain: false,
            selectedAttraction: 0.05,
            friction: 0.5,
            wrapAround: true,
            pageDots: true,
            setGallerySize: true,

        });
    }
    // elem.forEach(function(currentValue, currentIndex, listObj) {
    //     new Flickity( currentValue, {
    //         // options
    //         contain: false,
    //         selectedAttraction: 0.05,
    //         friction: 0.5,
    //         wrapAround: true,
    //         pageDots: true,
    //         setGallerySize: true,
    //
    //     });
    // })

});

