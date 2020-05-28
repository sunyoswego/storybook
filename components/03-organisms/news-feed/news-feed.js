jQuery(function($) {
    $('[data-term-id]').each(function(el,i) {
        var termid = $(el).attr('data-term-id');
        $('.term-'+termid).ajax({
            url: 'https://www.oswego.edu/news/ajax/' + termid
        }).done(function( msg ) {
            alert( "Data Saved: " + msg );
        });
    })
});