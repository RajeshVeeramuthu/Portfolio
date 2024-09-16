$(document).ready(function() {
        $("#home").slideDown("slow")

    $('.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
            if ($(window).width() < 992) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });
    $('#sentmailbtn').on('click',function(event){
        alert("This functionality currently unavailable. Try Whatsapp or Instagram");
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    })
});
