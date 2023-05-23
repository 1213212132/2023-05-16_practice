$(function () {
    $('.main_slide').slick({
        arrows: false,

        autoplay: true,
        afterChage: function () {
            console.log("변했네")
        }
    });
    // $('main_slide').on('afterChage: function ', function () {

    //     let_this = $('.main_slide .slick-current');
    //     -this.addClasee('on').siblings().removeClass('on');
    // })


})