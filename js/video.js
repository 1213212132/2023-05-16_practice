$(function () {
    $('#bgn').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=ngzrBsRM1O8',
        containment: '#main_visual',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,





    });


    $('#conVideo').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=ngzrBsRM1O8',
        containment: '.bgm1',
        showControls: false,
        playOnlyIfVisible: true,


    });



    $('#conVideo2').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=ngzrBsRM1O8',
        containment: '.bgm2',
        showControls: false,
        playOnlyIfVisible: true,


    });


    $('#conVideo3').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=ngzrBsRM1O8',
        containment: '.bgm3',
        showControls: false,
        playOnlyIfVisible: true,


    });


    $('#conVideo4').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=ngzrBsRM1O8',
        containment: '.bgm4',
        showControls: false,
        playOnlyIfVisible: true,


    });


    $('#conVideo5').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=ngzrBsRM1O8',
        containment: '.bgm5',
        showControls: false,
        playOnlyIfVisible: true,


    });





    $('#main_visual .play').on('click', function () {

        $('#bgn').YTPPlay();
    })

    $('#main_visual .pause').on('click', function () {

        $('#bgn').YTPPause();
    })
})



