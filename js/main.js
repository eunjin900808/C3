$(function(){
    $(".main>li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })

    // var n = 0; //0 1 2
    // setInterval(function(){
    //     if(n == 2){
    //         n=0;
    //     }else{
    //         n++;
    //     }

    //     $(".left_move").animate({"left" : n * (-800) + "px"}, 500)
    // }, 2000)//

    setInterval(function(){
        $(".left_move").animate({left : "-800px"}, 500, function(){
            $(".left_move").append($(".left_move li").eq(0));
            $(".left_move").css({left :"0"})
        })
    }, 2000)

    $(".p_click").click(function(){
        $(".popup").show()
    })

    $(".close").click(function(){
        $(".popup").slideUp()
    })
})//end