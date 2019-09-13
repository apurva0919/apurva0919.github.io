$(document).ready(function() {

$('.js-nav-icon').click(function(){
    var nav = $('.js-sidebar');
    nav.slideToggle(200);
});

/* $(window).scroll(function() {
    var position = $(this).scrollTop();

    $('.section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');
        console.log(id);

if (position >= target) {
    $('#navigation > ul > li > a').removeClass('active');
    $('#navigation > ul > li > a[href=#' + id + ']').addClass('active');
}
});
}); */

});