$(function () {

    $(window).on('scroll', function () {
        // 변수에 스크룰한 량을 담는다
        let sct = $(window).scrollTop()
        console.log(sct)

        if (sct > 100) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    })
})