$(function(){
    $('#close').on('click', function(){
        $('#popup').hide()
    });

    $('#cancel').on('click', function(){
        $('#popup').hide()
    });
});

// main_title 클릭 시 menu 화면으로 스크롤
$(function(){
    $("#main_title").click(function() {
        $('html,body').animate({scrollTop:800}, 500);
    })
})

