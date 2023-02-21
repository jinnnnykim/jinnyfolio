$(function(){ //GNB
  const gnb=$('#gnb_wrap');
  const sub=$('#gnb .sub');
  let main_toggle=0;
  let sub_toggle=0;

  gnb.css({height:0, overflow:'hidden', transition:0.5+'s'});
  sub.css({height:0, overflow:'hidden', transition:0.5+'s'});

  $('.ham').click(()=>{
    if(main_toggle==0){
      gnb.css({height:940+'px',});
      $('.ham div:eq(0)').css({top:8, transform:'rotate('+45+'deg)'});
      $('.ham div:eq(1)').css({opacity:0});
      $('.ham div:eq(2)').css({top:8, transform:'rotate('+(-45)+'deg)'});
      main_toggle=1;
    } else {
      gnb.css({height:0,});
      $('.ham div:eq(0)').css({top:0, transform:'rotate('+0+'deg)'});
      $('.ham div:eq(1)').css({opacity:1});
      $('.ham div:eq(2)').css({top:16, transform:'rotate('+0+'deg)'});
      main_toggle=0;
    }
  });
  $('#gnb .main.shop').click(()=>{
    if(sub_toggle==0){
      sub.css({height:420+'px',});
      $('.plus_col').css({top:'calc('+50+'%'+ - 3+'px/'+2+')', transform:'rotate('+90+'deg)'});
      $('.plus_row').css({opacity:0});
      sub_toggle=1;
    } else {
      sub.css({height:0,});
      $('.plus_col').css({top:'calc('+50+'%'+ - 15+'px/'+2+')', transform:'rotate('+0+'deg)'});
      $('.plus_row').css({opacity:1});
      sub_toggle=0;
    }
  });
});