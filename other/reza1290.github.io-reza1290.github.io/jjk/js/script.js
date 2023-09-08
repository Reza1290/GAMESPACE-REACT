$(window).on('load',function(){

    setTimeout(function(){$('.loading').css('display','none');},2000);
    
    setTimeout(function(){$('.real').css('display','block');},2000);
    $.ajax({
        url : 'https://api.jikan.moe/v4/anime/40748/full',
        type : 'get',
        dataType : 'json',
        success: function(result){
            $('.sinopsis-anime').append(result.data['synopsis'])
        }

    })
    $.ajax({
        url : 'https://api.jikan.moe/v4/anime/51009/full',
        type : 'get',
        dataType : 'json',
        success: function(result){
            $('.judul-anime').html(`'
            `+ result.data['title']+ `
            
            '`)
        }

    })

});