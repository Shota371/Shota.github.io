$(document).ready(function() {
	if ($(window).width() > 768) {
		console.log(5);
        $("#slider_container").removeClass("owl-carousel");
        return;
	}
	else {
        $("#slider_container").owlCarousel({
    	    items: 1,
    	    singleItem: true,
            nav: true,
            pagination: true,
            paginationNumbers: false

        });
    }
    
});