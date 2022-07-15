// Start Nav

$(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if(getscrolltop >= 400){
        $(".navbar").addClass("navmenus");
        $(".menuitems").css({
            "color":"#fff",
            "font-size":"16px"
        })
        $(".logotexts").css({
            "color":"#fff"
        })
    }else{
        $(".navbar").removeClass("navmenus");
        $(".menuitems").css({
            "color":"#000",
            "font-size":"18px"
        })
        $(".logotexts").css({
            "color":"#000"
        })
    }
}); 

// End Nav


// Start Spec Section
$(document).ready(function(){

    $(".specbtn").click(function(){
        $(this).toggleClass("activespecs").siblings().removeClass("activespecs");
    });

    $(".specdisplay,.spechardware,.specmemory,.speccamera,.specspeaker,.specbattery,.specfeatures").hide();

    $("#specbody").click(function(){
        $(".specbody").fadeIn(1500).siblings().hide();
    });

    $("#specdisplay").click(function(){
        $(".specdisplay").fadeIn(1500).siblings().hide();
    });

    $("#spechardware").click(function(){
        $(".spechardware").fadeIn(1500).siblings().hide();
    });

    $("#specmemory").click(function(){
        $(".specmemory").fadeIn(1500).siblings().hide();
    });

    $("#speccamera").click(function(){
        $(".speccamera").fadeIn(1500).siblings().hide();
    });

    $("#specspeaker").click(function(){
        $(".specspeaker").fadeIn(1500).siblings().hide();
    });

    $("#specbattery").click(function(){
        $(".specbattery").fadeIn(1500).siblings().hide();
    });

    $("#specfeatures").click(function(){
        $(".specfeatures").fadeIn(1500).siblings().hide();
    });
})






// End Spec Section