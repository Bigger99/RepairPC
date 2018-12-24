$(".menu_li a").mPageScroll2id(); 

$(".menu_li .li1:after").mPageScroll2id();
$(".menu_li .li2:after").mPageScroll2id();
$(".menu_li .li3:after").mPageScroll2id();
$(".menu_li .li4:after").mPageScroll2id();

$("#btnCall").mPageScroll2id();

$(".arrow a").mPageScroll2id();

$('body').append('<button class="btn_up">');

$('.btn_up').click(function(){
    $('body').animate({'scrollTop': 0},1000);
    $('html').animate({'scrollTop': 0},1000);
})

$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $('.btn_up').addClass('active');
    } else {
        $('.btn_up').removeClass('active');
    }
})

$(window).scroll(function(){
    if($(window).scrollTop()>50){
        $('.header').addClass('header_scroll');
    } else {
        $('.header').removeClass('header_scroll');
    }
})
