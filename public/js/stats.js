$(function(){
    api = $('.stat').on('click', function(){
        $('#popup').show()
        // var badgeId = this.id
        // console.log(badgeData[badgeId]);
        console.log("dd");
        // var api = badgeData[badgeId]
        // document.getElementById('badgeText').innerHTML = api;
        // document.getElementById('badgeExample').innerHTML = api;
        // document.getElementById('badgeText').innerHTML = "<xmp>"+api+"<xmp>";
        return api
    })
    $('#close').on('click', function(){
        $('#popup').hide()
    })

    $('#cancel').on('click', function(){
        $('#popup').hide()
    })
})