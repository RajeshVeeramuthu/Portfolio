$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
            // Close navbar-collapse on link click
            if ($(window).width() < 992) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });
});
