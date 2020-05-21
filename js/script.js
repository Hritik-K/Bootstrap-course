$('document').ready(function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#carousel-button').click(function(){
        if($('#carousel-button').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carousel-button').children('span').removeClass('fa-pause');
            $('#carousel-button').children('span').addClass('fa-play');
        }
        else{
            $('#mycarousel').carousel('cycle');
            $('#carousel-button').children('span').removeClass('fa-play');
            $('#carousel-button').children('span').addClass('fa-pause');
        }
    });
    
    $('button.navbar-toggler').click(function(){
    $('#Navbar').collapse("toggle");
    });

    $('#login').click(function(){
        $('#loginModal').modal("show");
    });

    $('button[class="close"]').click(function(){
        $('#loginModal').modal("hide");
        $('#reserve_table').modal("hide");
    });

    $('button[name="cancel"]').click(function(){
        $('#loginModal').modal("hide");
        $('#reserve_table').modal("hide");
    });

    $('#reserveTable').click(function(){
        $('#reserve_table').modal("show");
    });

})
