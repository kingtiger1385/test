$('#tosekhat').hide();
$(".sekhat").on('click',function(){
    $('#tosekhat').slideDown();
})
$("#zabdar").on('click',function(){
    $('#tosekhat').slideUp();
})
$('#slide-paiin2').hide();
$('#slide-bala2').hide();

$('#slide-paiin1').on('click',function(){
    $('.slide1').hide();
    $('.slide2').hide();
$('#slide-paiin2').show();
$('#slide-paiin1').hide();

})

$('#slide-paiin2').on('click',function(){
    $('.slide1').hide();
    $('.slide2').hide();    
    $('.slide3').hide();
    $('.slide4').hide();
    $('#slide-bala1').hide();
    $('#slide-bala2').show();
})
$('#slide-bala1').on('click',function(){
    $('.slide1').show();
    $('.slide2').show();    
    $('.slide3').show();
    $('.slide4').show();
    $('#slide-paiin2').hide();
    $('#slide-paiin1').show();
})
$('#slide-bala2').on('click',function(){
    $('.slide1').hide();
    $('.slide2').hide();    
    $('.slide3').show();
    $('.slide4').show();
    $('#slide-bala1').show();
    $('#slide-bala2').hide();
})
$('.slider2').hide()
$('.slider3').hide()
$('#button2').on('click',function(){
$('.slider2').show()
$('.slider1').hide()
})
$('#button3').on('click',function(){
    $('.slider2').hide()
    $('.slider1').show()
})
 $('#button4').on('click',function(){
    $('.slider2').hide()
    $('.slider3').show()
})
$('#button1').on('click',function(){
$('.slider3').show()
 $('.slider1').hide()
})
$('#button5').on('click',function(){
    $('.slider3').hide()
     $('.slider2').show()
    })
    $('#button6').on('click',function(){
        $('.slider3').hide()
         $('.slider1').show()
        })

$('.option1').hide();
$('.option2').hide();
$('#slide-btn3').hide();
$('#slide-btn4').hide();
$('#slide-btn2').on('click',function(){
$('.sec4').hide() ;   
$('.sec3').css('margin-left','3%');
$('.sec1').css('margin-right','2%');
$('.option1').show();
$('.option1').css('margin-right','3%');
$('#slide-btn2').hide();
$('#slide-btn4').show();
})
$('#slide-btn4').on('click',function(){
    $('.sec4').hide() ;   
    $('.sec3').hide();
    $('.sec1').css('margin-right','2%');
    $('.option1').show();
    $('.option2').show();
    $('.option1').css('margin-right','3%');
    $('#slide-btn2').hide();
    $('#slide-btn1').hide();
    $('#slide-btn4').show();
    $('#slide-btn3').show();
    })
$('#slide-btn1').on('click',function(){
    $('.option1').hide() ;   
    $('.sec3').css('margin-left','27%');
    $('.sec1').css('margin-right','2%');
    $('.sec4').show();
    $('#slide-btn4').hide();
    $('#slide-btn2').show();
    })
$('#slide-btn3').on('click',function(){
    $('.sec4').hide() ;   
    $('.sec3').css('margin-left','3%');
    $('.sec1').css('margin-right','2%');
    $('.option1').show();
    $('.sec3').show();
    $('.option2').hide();
    $('.option1').css('margin-right','3%');
    $('#slide-btn2').hide();
    $('#slide-btn3').hide();
    $('#slide-btn4').show();
    $('#slide-btn1').show();
    })




$('.btn-5').hide();
$('.btn-6').hide();
$('.option3').hide();
$('.option4').hide();
$('.btn-4').on('click',function(){
$('.option3').show();
 $('.btn-6').show();
$('.btn-4').hide();
$('.secsh4').hide();
$('.secsh3').addClass('secsh4');
$('.secsh3').css('margin-top','1%')
});
$('.btn-6').on('click',function(){
    $('.option4').show();
     $('.btn-3').hide();
     $('.btn-5').show();
    $('.secsh4').hide();
    $('.secsh3').addClass('secsh4');
    $('.secsh3').css('margin-top','1%')
});
$('.btn-3').on('click',function(){
    $('.option3').hide();
    $('.option4').hide();
     $('.btn-6').hide();
    $('.btn-4').show();
    $('.secsh4').show();
    $('.secsh3').removeClass('secsh4');
    $('.secsh3').css('margin-top','1.5%')
    });
    $('.btn-5').on('click',function(){
        $('.option3').show();
        $('.option4').hide();
        $('.btn-5').hide();
        $('.btn-3').show();
         $('.btn-6').show();
        $('.btn-4').hide();
        $('.secsh4').hide();
        $('.secsh3').show();
        $('.secsh3').css('margin-top','1%')
        });