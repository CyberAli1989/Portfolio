$(function() {
    // let slide = false
    let head = false
    let about = false
    $("#home").click(function(e) {
        if (head == true) {
            $('header').slideToggle();
            
        }
        $('body').css('overflow', 'hidden');

    })
    $("#about").click(function (e) { 
        e.preventDefault();
        $('header').slideUp();
        head = true
        if (about == true) {
            $('#About').slideToggle();

        }
        $('body').css('overflow', 'visible');
        $('#Contact').css('display', 'none');
    });
    $("#contact").click(function (e) { 
        e.preventDefault();
        $('#About').slideUp();
        $('header').slideUp();
        about = true
        head = true
        $('body').css('overflow', 'hidden');
        $('#Contact').css('display', 'initial');

    });
    
})