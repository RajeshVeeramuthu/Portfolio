$(document).ready(function() {
    $("#home")
    .css({ opacity: 0, position: 'relative' })
    .slideDown(1000)
    .animate({ opacity: 1 }, { duration: 1500, queue: false })
    .animate({ top: "-30px" }, 400)  
    .animate({ top: "0px" }, 400);

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
