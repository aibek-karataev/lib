$(document).ready(function(){
  function fixed_menu(){
    if ($(window).width()<='768')
    {
        $(window).scroll(function(){
              if ($(this).scrollTop()>170)
              {
                $('.header_menu').addClass('fixed-top');
          
              } else if ($(this).scrollTop()<170)
              {
                $('.header_menu').removeClass('fixed-top');
              }
       
         });
    } else 
    {
      $(window).scroll(function(){
              if ($(this).scrollTop()>150)
              {
                $('.header_menu').addClass('fixed-top');
          
              } else if ($(this).scrollTop()<150)
              {
                $('.header_menu').removeClass('fixed-top');
              }
       
         });
    }
    
    }; 
    $(window).load(fixed_menu);
    $(window).resize(fixed_menu);

    $('#block-left, #block-right')
    .theiaStickySidebar({
        additionalMarginTop: 70
    });
})