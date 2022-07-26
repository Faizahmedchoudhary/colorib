console.log("this is js ");

    $("#documentation").delay(300000).animate({'opacity':'1'},600);

$(function () {


    $(window).scroll(function(){

        
        if ($(window).scrollTop() > 0) {
            $('.main-header').addClass('sticky')
        }
        else{
            $('.main-header').removeClass('sticky')
            
        }
    });


});

// $(document).ready(function () {
      
//     $('#sectionone').fadeIn(5000);
// })

$('#sectionone').delay(600).animate({'opacity':'1'},800);


// faq js


$('#navtab-ul li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first-child').show();

$('#navtab-ul li').click(function(){
    $('#navtab-ul li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    
    var activetab = $(this).find('a').attr('href');
    $(activetab).fadeIn();
    return false
});



// faq js