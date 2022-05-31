$(function () {
    $('#about').click(() => {
        var counter = 0;
        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;
        var i = setInterval(function () {
            $('.box .counter h2#first').html(a);
            $('.box .counter h2#second').html(b);
            $('.box .counter h2#third').html(c);
            $('.box .counter h2#forth').html(d);

            // $('.box #counter h2').css('background-color', 'red');
            counter++;
            if (a == 5) {
                a = 5;
            } else {
                a++;
            }

            if (b == 10) {
                b = 10
            } else {
                b++
            }
            if (c == 8) {
                c = 8;
            } else {
                c++;

            }
            if (d == 0) {
                d = 0;
            } else {
                d++
            }

            if (counter == 11) {
                clearInterval(i);
            }
        }, 50);
    })

});