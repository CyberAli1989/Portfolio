$(function () {

    let darkMod = true;
    var styleElem = document.head.appendChild(document.createElement("style"));
    $('#nav ul li:first-child').click(function () {

        if (darkMod) {
            $('#nav ul li i.bxs-sun').css('display', 'block');
            $('#nav ul li i.bxs-moon').css('display', 'none');
            $('#nav ul li').css('background', '#eeeeee');
            $('#nav ul li i').css('color', '#000');
            $('.leftBg').css('background', '#72b626');
            $('body').css('background', '#fff');
            $('#headDesc p').css('color', '#000');
            $('#headDesc .btn button.learn-more .button-text').css('color', '#000');
            $('#headDesc .title h2').css('color', '#72b626' );
            $('#headDesc .btn button.learn-more .circle').css('background', '#72b626');
            $('#headDesc .btn button.learn-more .button-text').css('border', '1px solid #72b626');
            $('#nav ul li:before').css('background', '#72b626');
            styleElem.innerHTML = "#nav ul li:before {background: #72b626 !important;}"
            $('#nav ul').css('background', '#ffffff')
            $('#nav ul li').hover(function () {
                // over
                this.style.background = '#72b626';

            }, function () {
                this.style.background = '#eeeeee';
                // out

            });
            // darkMod = false;
        } else {
            $('#nav ul li i.bxs-sun').css('display', 'none');
            $('#nav ul li i.bxs-moon').css('display', 'block');
            $('#nav ul li').css('background', '#2b2a2a');
            $('#nav ul li i').css('color', '#fff');
            $('.leftBg').css('background', '#ffb400');
            $('body').css('background', '#111111')
            $('#headDesc p').css('color', '#fff')
            $('#headDesc .btn button.learn-more .button-text').css('color', '#fff');
            $('#headDesc .btn button.learn-more .button-text').css('border', '1px solid #ffb400');
            styleElem.innerHTML = "#nav ul li:before {background: #ffb400 !important;}";
            $('#headDesc .title h2').css('color', '#ffb400');
            $('#nav ul').css('background', '#2b2a2a')
            $('#nav ul li').css('background', '#444444')
            $('#headDesc .btn button.learn-more .circle').css('background', '#ffb400');
            $('#nav ul li').hover(function () {
                // over
                this.style.background = '#ffb400';

            }, function () {
                // out
                this.style.background = '#444444';

            });

        }
        darkMod = !darkMod;
    })
});