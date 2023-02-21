$(function(){

  ////////////////// Page Scroll //////////////////

  //초기설정  
  let winH=$(window).height();
  $(window).resize(function(){
    winH=$(window).height();
    $('html,body').stop().animate({scrollTop:winH*a},700);
  });
  $('#header').css({height:0});
  $('#footer').css({height:0});
  // const last_gnb=$('.gnb li:eq(0)');
  $('.gnb li').css({fontWeight:400, color:'white'});

  //GNB
  for(i=0;i<3;i++){
    $('.gnb li').eq(i).click(function(e){
      e.preventDefault;
      let idx=$(this).index();
      $(this).css({fontWeight:800, color:'#b6fff9'});
      $('html,body').animate({scrollTop:winH*(idx+1)},700); 
    });
  }
  //LOGO
  $('.s_logo').click(function(){
    $('html,body').stop().animate({scrollTop:winH*0},700);
  });
  

  //마우스 휠
  let a = 0;
  let pageN = $('.page').length;

  $('.page').on('mousewheel',function(e,delta){
    let n = $(this).index();
    if(delta<0){a = n+1;} 
    else {a = n-1;};
    if(a<=0){a=0};
    if(a>=pageN-1){a=pageN-1};

    $('html,body').stop().animate({scrollTop:winH*a},700); 
  });

  //스크롤링
  $(window).scroll(function(){
    let sc = $(document).scrollTop();
    if((sc>=0) && (sc<winH*1)){//HOME
      a=0;
      $('#header').css({height:0});
      $('#footer').css({height:0});
    };
    if((sc>=winH*1) && (sc<winH*2)){//WORKS
      a=1;
      $('.gnb li a').css({fontWeight:400, color:'white'});
      $('.gnb li:eq(0) a').css({fontWeight:800, color:'#b6fff9'});
      $('#header').css({height:100});
      $('#footer').css({height:182});
    };
    if((sc>=winH*2) && (sc<winH*3)){//ABOUT
      a=2;
      $('.gnb li a').css({fontWeight:400, color:'white'});
      $('.gnb li:eq(1)>a').css({fontWeight:800, color:'#b6fff9'});
      $('#header').css({height:20});
      $('#footer').css({height:182});
    };
    if((sc>=winH*3) && (sc<winH*4)){//CONTACT
      a=3;
      $('.gnb li a').css({fontWeight:400, color:'white'});
      $('.gnb li:eq(2) a').css({fontWeight:800, color:'#b6fff9'});
      $('#header').css({height:20});
      $('#footer').css({height:182});
    };
  });


  ////////////////// Works Gallery //////////////////
  const gall=$(".contents_area .gall");//움직일 대상
  let targetX=0;//목적지
  const imgW=$('.gall li').width();
  const imgN=$('.gall li').length;

  //초기설정
  gall.animate({left:targetX});
  const temp=$('.gall ul').clone();
  gall.append(temp)

  //next
  $('.next').click(function(){
    targetX -= imgW;
    if(targetX < -imgW*(imgN*2-1)){ //끊어지는 위치가 목적지가 되면
      gall.css({left:-imgW*(imgN-1)}); //끊어지지 않는 위치로 보내고
      targetX= -imgW*imgN; //한단계 왼쪽 위치를 목적지로 설정
    };
    gall.animate({left:targetX},700);
  });

  //prev
  $('.prev').click(function(){
    targetX += imgW;
    if(targetX > 0){ //끊어지는 위치가 목적지가 되면
      gall.css({left:-imgW*imgN}); //끊어지지 않는 위치로 보내고
      targetX= -imgW*(imgN-1); //한단계 오른쪽 위치를 목적지로 설정
    };
    gall.animate({left:targetX},700);
  });

  ////////////////// button hover //////////////////
  $('.gall .thumbnail>img').css({transform:'scale('+1.1+')', transition:1+'s'});

  $('.more_btn').mouseenter(function(){
    $(this).css({color:'#111', background:'white',});
    $('.gall .thumbnail>img').css({transform:'scale('+1+')'});
  });

  $('.more_btn').mouseleave(function(){
    $(this).css({color:'white', background:'none',});
    $('.gall .thumbnail>img').css({transform:'scale('+1.1+')'});
  });

});