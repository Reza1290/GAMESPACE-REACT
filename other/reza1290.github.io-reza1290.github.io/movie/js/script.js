function SearchMovie(){
    $('#movie-list').html('')

    $.ajax({
        url : 'http://www.omdbapi.com',
        type : 'get',
        dataType : 'json',
        data : {
            'apikey' : 'b626a0f8',
            's' : $('#search-input').val() 
        },
        success : function(result){
            console.log(result);
            if(result.Response == "True"){
                let movies =  result.Search;
                $.each(movies, function(i,data){
                    $('#movie-list').append(`
                    
                    <div class="col-sm-3 mb-5">
                        <div class="card" style="width: 18rem;">
                            <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+ movies[i]["Title"] +`</h5>
                                    <p class="card-text"> Type : `+ movies[i]["Type"] +` <br> Year : `+ movies[i]["Year"] +`</p>
                                    <a href="#" id="detail" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">Link</a>
                                </div>
                        </div>
                    </div>
                    
                    `);
                    
                })
                
            $('#search-input').val('')
                //$('#movie-list').html('<h1>'+ result.totalResults +' Found! </h1>');
            }else{
                $('#movie-list').html('<h1>'+ result.Error +'</h1>');
            }
        }
    });
}

$('#movie-list').on('click','#detail',function(){
    
    let idMovie = $(this).data('id');
    $.ajax({
        url : 'http://www.omdbapi.com',
        type : 'get',
        dataType : 'json',
        data : {
            'apikey' : 'b626a0f8',
            'i' :  idMovie,
            'plot' : 'full'
        },
        success: function(hasil){
            console.log(hasil);
            if(hasil.Response == 'True'){

                $('.modal-title').html(`
                    `+ hasil.Title +`
                `)
                $('.modal-body').html(`
                <div class="clearfix">
                <svg class="bd-placeholder-img col-md-6 float-md-end mb-3 ms-md-3" width="100%" height="210"  role="img" aria-label="Placeholder: Responsive floated image" preserveAspectRatio="xMidYMid slice" focusable="false"><img src="`+ hasil.Poster +`"<title></title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                Judul :`+ hasil.Title +` <br>
                Tahun :`+ hasil.Year +`<br>
                Rated :`+ hasil.Rated +`<br>
                `+ hasil.Released +`<br>
                `+ hasil.Runtime +`<br>
                `+ hasil.Genre +`<br>
                <h1></h1>
                <p>
                  `+hasil.Plot+`
                </p>
              
              </div>
                `)
                
            }
        }
    })

});



$('#search-button').on('click',function(){
    
    SearchMovie();
});

$('#search-input').on('keyup',function(e){
    if(e.which === 13){
        SearchMovie();
    }
});