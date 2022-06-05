$(function(){
    $('.badge').on('click', function(){
        $('#popup').show()
        badgeId = this.id
        // console.log(badge)
        // // document.getElementById('badgeText').innerHTML = badge+"."+badgeId
    })

    $('#close').on('click', function(){
        $('#popup').hide()
    })

    $('#cancel').on('click', function(){
        $('#popup').hide()
    })
})
