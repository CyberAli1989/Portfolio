$(function () {
    var styleElem = document.head.appendChild(document.createElement("style"));
    var isNight = true;


    $('#nav ul li:first-child').click(function (e) {
        e.preventDefault();
        if (!isNight) {
            // change button icon
            $('#nav ul li i.bxs-sun').css('display', 'none');
            $('#nav ul li i.bxs-moon').css('display', 'block');
            // body background color
            $('body').removeClass('dayBg');
            $('.leftBg').removeClass('dayLeftBg');
            // head text color
            $('#headDesc').removeClass('dayFontColor');
            // menu color and background color
            $('#nav ul li').removeClass('dayMenu');
            // buttons background color and color
            $('.cssbuttons-io-button').removeClass('dayBtns');
            // About Sections background color and color
            $('#About').removeClass('dayAbout')
            $('#About .boxs .box').removeClass('dayBox')
            // skill progress
            $('#About .progress').removeClass('dayProgress')
            // Edu Sections 
            $('#About .edContent ').removeClass('dayEdu')
            $('#About .edContent .icons').removeClass('dayEduBg')
            $('#About .edContent .date').removeClass('dayEduBg')
            $('#headDesc .title h2').removeAttr('data-colors', '#72b626');
            $('#headDesc .title h2').removeClass('dayTyper');

            isNight = true;


        } else {
            // change button icon
            $('#nav ul li i.bxs-sun').css('display', 'block');
            $('#nav ul li i.bxs-moon').css('display', 'none');
            // body background color
            $('body').addClass('dayBg');
            $('.leftBg').addClass('dayLeftBg');
            // head text color {
            $('#headDesc').addClass('dayFontColor')
            // menu color and background color 
            $('#nav ul li').addClass('dayMenu')
            // buttons background color and color
            $('.cssbuttons-io-button').addClass('dayBtns');
            // About Sections background color and color
            $('#About').addClass('dayAbout')
            $('#About .boxs .box').addClass('dayBox')
            // skill progress
            $('#About .progress').addClass('dayProgress')
            // Edu Sections 
            $('#About .edContent ').addClass('dayEdu')
            $('#About .edContent .icons').addClass('dayEduBg')
            $('#About .edContent .date').addClass('dayEduBg')
            // typer color 
            $('#headDesc .title h2').attr('data-colors', '#72b626');
            $('#headDesc .title h2').attr('data-colors', '#72b626');
            $('#headDesc .title h2').addClass('dayTyper');


            isNight = false;

        }
    });
});