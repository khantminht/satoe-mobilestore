// Start Nav

$(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if(getscrolltop >3){
        $(".navbar").css({
            "box-shadow":"0 0 10px #aaa"
        });
    }else{
        $(".navbar").css({
            "box-shadow":"none"
        });
    }
    
    if(getscrolltop >= 50){
        $(".promotions").fadeOut(500);
    }else{
        $(".promotions").fadeIn(1000);
    }

    if(getscrolltop < 580){
        $(".navmenus").css({
            "background-color":"rgba(255, 255, 255, 0.5)"
        })   
    }

    if(getscrolltop >= 580){

        $(".promotions").fadeOut(1000);

        $(".navbar").addClass("navmenus");
        $(".menuitems").css({
            "color":"#fff",
            "font-size":"16px"
        });

        $(".navbar").css({
            "box-shadow":"none"
        });

        $(".logotexts").css({
            "color":"#fff"
        });

        $(".ellpises").addClass("text-light");

    }else{

        $(".navbar").removeClass("navmenus");

        $(".menuitems").css({
            "color":"#000",
            "font-size":"18px"
        });

        $(".logotexts").css({
            "color":"#000"
        });

        $(".ellpises").removeClass("text-light");
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
        $(".specbody").fadeIn(1000).siblings().hide();
    });

    $("#specdisplay").click(function(){
        $(".specdisplay").fadeIn(1000).siblings().hide();
    });

    $("#spechardware").click(function(){
        $(".spechardware").fadeIn(1000).siblings().hide();
    });

    $("#specmemory").click(function(){
        $(".specmemory").fadeIn(1000).siblings().hide();
    });

    $("#speccamera").click(function(){
        $(".speccamera").fadeIn(1000).siblings().hide();
    });

    $("#specspeaker").click(function(){
        $(".specspeaker").fadeIn(1000).siblings().hide();
    });

    $("#specbattery").click(function(){
        $(".specbattery").fadeIn(1000).siblings().hide();
    });

    $("#specfeatures").click(function(){
        $(".specfeatures").fadeIn(1000).siblings().hide();
    });
})

// End Spec Section

// Start Details Section
$(window).scroll(function(){

    let getscrolltop = $(this).scrollTop();

    if(getscrolltop >= 1400){

        $(".navmenus").css({
            "background-color":"rgba(255, 255, 255, 0.5)",
            "box-shadow":"0 0 10px #aaa"
        })

        $(".menuitems").css({
            "color":"#000",
            "font-size":"16px"
        });

        $(".logotexts").css({
            "color":"#000"
        });

        $(".ellpises").removeClass("text-light");

    }else{
        $(".navmenus").css({
            "background-color":"rgba(0, 0, 0, 0.7)"
        })
    }

    if(getscrolltop >=1050){
        $(".detailphotos1").css({
            "opacity":"1",
            "transform":"translate(0)"
        })
    }

    if(getscrolltop >=1700){
        $(".detailphotos2").css({
            "opacity":"1",
            "transform":"translate(0)"
        })
    }

    if(getscrolltop >=2300){
        $(".detailphotos3").css({
            "opacity":"1",
            "transform":"translate(0)"
        })
    }

    if(getscrolltop >=2800){
        $(".detailphotos4").css({
            "opacity":"1",
            "transform":"translate(0)"
        })

        // $("#adsmodal").show(1000);
       
    }

    if(getscrolltop >=3400){
        $(".detailphotos5").css({
            "opacity":"1",
            "transform":"translate(0)"
        })
    }

    if(getscrolltop >=4000){
        $(".detailphotos6").css({
            "opacity":"1",
            "transform":"translate(0)"
        })
    }

})
// End Details Section


// Start Content Section

$(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if(getscrolltop >= 7600){
        $(".navbar").addClass("navmenus");

        $(".navmenus").css({
            "background-color":"rgba(0, 0, 0, 0.7)",
            "box-shadow":"none"
        });

        $(".menuitems").css({
            "color":"#fff",
            "font-size":"16px"
        });

        $(".logotexts").css({
            "color":"#fff"
        });

        $(".ellpises").addClass("text-light");

    }
}); 

   
    $(".contactinput1").focus(function(){
        $(".contactlabel1").effect("fade",1000);
        $(".contactinput1").effect("bounce",1000);
    });

    $(".contactinput2").focus(function(){
        $(".contactlabel2").effect("fade",1000);
        $(".contactinput2").effect("bounce",1000);
    });


// End Content Section
    const getyear = $("#getyear")
    const getfullyear = new Date().getUTCFullYear();

    getyear.text(getfullyear);

//Start Footer Section 

// Start Ads Section
   $(".foradsmodal").mouseleave(function(){
        $("#adsmodal").modal("show");
   })
// End Ads Section

    

