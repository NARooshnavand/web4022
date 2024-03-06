$(document).ready(function(){
    console.log("jQuery is ready");
    var mleft = 300;
    var totalwidth = $(document).width();
    // console.log(totalwidth);
    $('.mybtn').on('click',function(e){
        console.log(e);
        $(this).html("change the name");
        // alert("You clicked on button 1");
    })
    $('#changeptag').on('click',function(){
        // $('#ptag').toggle();
        // $('#mybox').css("left","300px")
        if(mleft+300 > totalwidth)
        {
            $('#mybox').animate({left: totalwidth+'px'});
            mleft =totalwidth - mleft;
            mleft = 300 - mleft;
          $('#mybox').css("left",'0px');
            $('#mybox').animate({left: mleft+'px'});
        }else{
            $('#mybox').animate({left: mleft+'px', duration : 1000});
            mleft = mleft+300;
        }
    })
    // $('.mybtn').on('mouseenter',function(e){
    //     console.log(e);
    //     // alert("You clicked on button 1");
    // })
    // #mybtn
})


