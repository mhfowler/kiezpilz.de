
$(document).ready(function() {
    console.log('++ jquery is working heyyyyy');

    $('.language-option').removeClass('selected');
    if (window.location.pathname.startsWith("/en/")) {
        $('.select-english').addClass("selected");
    } else if (window.location.pathname.startsWith("/de/")) {
      $('.select-german').addClass("selected");
    }

    $('.select-german').click(function(e) {
        // e.preventDefault();
        $('.language-option').removeClass('selected');
        $(this).addClass('selected');
        $(".english").hide();
        $(".german").show();
    });
       $('.select-english').click(function(e) {
        // e.preventDefault();
        $('.language-option').removeClass('selected');
        $(this).addClass('selected');
        $(".german").hide();
        $(".english").show();
    });
});



