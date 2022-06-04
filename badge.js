$(function(){
    $('.badge').on('click', function(){
        $('#popup').show()
    })

    $('#close').on('click', function(){
        $('#popup').hide()
    })

    $('#cancel').on('click', function(){
        $('#popup').hide()
    })
})