$(function() {
    // let slide = false
    let head = false
    let about = false
    $("#home").click(function(e) {
        e.preventDefault()
        if (head == true) {
            $('header').slideDown();
        }
        $('body').css('overflow', 'hidden');
        $('.leftBg').css('display', 'block');

    })
    $("#about").click(function (e) { 
        e.preventDefault();
        $('header').slideUp();
        head = true
        if (about == true) {
            $('#About').slideToggle();
        }
        $('body').css('overflow', 'visible');
        $('.leftBg').css('display', 'none');
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
        $('.leftBg').css('display', 'none');

    });
    
})