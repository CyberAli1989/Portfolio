$(function () {
    let today = new Date();
    let time = today.getHours() ;
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
            $('#headDesc .title h2').css('color', '#72b626');
            $('#nav ul li:before').css('background', '#72b626');
            styleElem.innerHTML = "#nav ul li:before {background: #72b626 !important;}#About h1::before {color: #eff0f0 !important;} .go .inset .numbers:after {color:#000 !important;}.skill-wrapper .skill-progress .circle .mask:before {background-color:#72b626 !important}"
            $('#nav ul').css('background', '#ffffff')
            $('#particles-js').css('background', '#fff')

            $('.btns .cssbuttons-io-button').css('background', '#72b626');
            $('.btns .cssbuttons-io-button').css('box-shadow', 'inset 0 0 1.6em -0.6em #72b626');
            $('.btns .cssbuttons-io-button .icon').css('box-shadow', '0.1em 0.1em 0.6em 0.2em #72b626')

            $('#About h1').css('color', '#606161');
            $('#About h1 span').css('color', '#72b626');
            $('#About .container').css('color', '#000')

            $('#About .container .boxs .box .counter h2').css('color', '#72b626')

            
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
            styleElem.innerHTML = "#nav ul li:before {background: #ffb400 !important;};#About h1::before {color: #444 !important;} .go .inset .numbers:after {color:#fff !important;} .skill-wrapper .skill-progress .circle .mask:before {background-color:#ffb400 !important}" ;
            $('#headDesc .title h2').css('color', '#ffb400');
            $('#nav ul').css('background', '#111111')
            $('#nav ul li').css('background', '#444444')
            $('#headDesc .btn button.learn-more .circle').css('background', '#ffb400');
            $('#particles-js').css('background', '#111111')

            $('.btns .cssbuttons-io-button').css('background', '#ffb400');
            $('.btns .cssbuttons-io-button').css('box-shadow', 'inset 0 0 1.6em -0.6em #ffb400');
            $('.btns .cssbuttons-io-button .icon').css('box-shadow', '0.1em 0.1em 0.6em 0.2em #ffb400')


            $('#About h1').css('color', '#fff');
            $('#About h1 span').css('color', '#ffb400');
            $('#About .container').css('color', '#fff');
            // styleElem.innerHTML = "#About h1::before {color: #444 !important;}";

            $('#About .container .boxs .box .counter h2').css('color', '#ffb400')
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