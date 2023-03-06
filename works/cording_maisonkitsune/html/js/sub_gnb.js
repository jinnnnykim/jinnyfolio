$(function(){ //GNB
  let subW = $('.sub_gnb .sub').width();
  $('.sub_gnb .sub').css({left:'calc('+50+'%' - subW+'px'/2+')',});

  $('.sub_gnb .sub').hide();
  $('.sub_gnb .main:eq(1)>a').css({fontWeight:'bold'});
  $('.sub_gnb .main:eq(1)').children().show();
  for(o=0;o<5;o++){
    $('.sub_gnb .main').eq(o).on('mouseover',function(){
      main_idx=$(this).index();
      $('.sub_gnb .main>a').css({fontWeight:400});
      $('.sub_gnb .main:eq('+main_idx+')>a').css({fontWeight:'bold'});
      $('.sub_gnb .sub').stop().fadeOut();
      $(this).children().stop().fadeIn();
    });
    $('.sub_gnb .main').eq(o).on('mouseleave',function(){
      $('.sub_gnb .main>a').css({fontWeight:400});
      $('.sub_gnb .main:eq(1)>a').css({fontWeight:'bold'});
      $('.sub_gnb .sub').stop().fadeOut();
      $('.sub_gnb .main:eq(1)').children().stop().fadeIn();
    });
  };

  let gnb_toggle=0;
  // $('.sub_gnb .sub').css({left:-200, zIndex:-1});
  
  $('.gnb_btn').on('click',function(){
    if(gnb_toggle==0){
      $('.sub_gnb').stop().slideDown(300);
      $('.gnb_btn div:eq(0)').css({top:11, transform:'rotate('+45+'deg)'});
      $('.gnb_btn div:eq(1)').css({opacity:0});
      $('.gnb_btn div:eq(2)').css({top:11, transform:'rotate('+(-45)+'deg)'});
      gnb_toggle=1;
    } else {
      $('.sub_gnb').stop().slideUp();
      $('.gnb_btn div:eq(0)').css({top:0, transform:'rotate('+0+'deg)'});
      $('.gnb_btn div:eq(1)').css({opacity:1});
      $('.gnb_btn div:eq(2)').css({top:22, transform:'rotate('+0+'deg)'});
      gnb_toggle=0;
    }
  });

 // alert($(window).width());

  $(window).resize(function(){
    if($(window).width()>(1024-17)){
      $('.sub_gnb').show();
      $('.sub_gnb .main:eq(1)').children().show();
      gnb_toggle=1;
    }
    else {
      $('.sub_gnb').hide();
      $('.sub_gnb .sub').hide();
      gnb_toggle=0;
    }
  });
});