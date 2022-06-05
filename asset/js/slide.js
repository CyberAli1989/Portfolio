$(function() {
    // let slide = false
    let head = false
    let about = false
    let portfolio = false;
    let contact = false;

    $("#home").click(function(e) {
        console.log($('body , html').offset().top);

        e.preventDefault()
        if (head == true) {
            $('header').slideDown();
            $('body , html').animate({scrollTop:0}, 'slow');

        }
        $('body').css('overflow', 'hidden');
        $('.leftBg').css('display', 'block');


    })
    $("#about").click(function (e) { 
        e.preventDefault();
        
        $('header').slideUp('slow');
        head = true;
        if (about == true) {
            $('#About').slideDown('slow');

        }
        $('body').css('overflow', 'visible');
        $('.leftBg').css('display', 'none');
        $('#Portfolio').css('display', 'none');
    });
    $("#portfolio").click(function (e) { 
        e.preventDefault();
        $('#About').slideUp('slow');
        $('header').slideUp('slow');
        about = true
        head = true
        if (portfolio) {
            $('#Contact').slideDown('slow');

        }
        $('body').css('overflow', 'hidden');
        $('#Portfolio').css('display', 'initial');
        $('.leftBg').css('display', 'none');
        $('#Contact').css('display', 'none');
        $('#Blog').css('display', 'none');
        $('#About').css('display', 'none')
    });
    $("#contact").click(function (e) { 
        e.preventDefault();
        $('#About').slideUp('slow');
        $('header').slideUp('slow');
        $('#Portfolio').slideUp('slow');
        about = true
        head = true
        portfolio = true
        $('body').css('overflow', 'visible');
        $('#Portfolio').css('display', 'none');
        $('.leftBg').css('display', 'none');
        // $('#About').css('display', 'none')
        $('#Contact').css('display', 'initial');
        $('#Blog').css('display', 'none');


    });
    $("#blog").click(function (e) { 
        e.preventDefault();
        $('#About').slideUp('slow');
        $('header').slideUp('slow');
        $('#Portfolio').slideUp('slow');
        $('#Contact').slideUp('slow');
        about = true
        head = true
        portfolio = true
        contact = true
    
    
        $('body').css('overflow', 'visible');
        $('#Portfolio').css('display', 'none');
        $('#Contact').css('display', 'none');
        $('.leftBg').css('display', 'none');
        // $('#About').css('display', 'none')
        $('#About').css('display', 'none');
        $('#Contact').css('display', 'none');
        $('#Blog').css('display', 'initial');
    
    
    });

    $('nav ul li').click(function() {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
})