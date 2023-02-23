
$(function(){ 
  //상품설명 영역 움직임
  let sc=0;
  $(window).scroll(function(){
    sc = $(document).scrollTop(); 

    if(sc>300){ $('.detail').css({top:sc-120,}); } 
    else if(sc>1300){ $('.detail').css({top:0}); }
    else { $('.detail').css({top:180,}); }
  });

  //카테고리 포커스
  $('.categories li').on('click',function(){
    $('.categories li').removeClass('cat_fo');
    $(this).addClass('cat_fo');
    last_cat=$(this);
    return false;
  });

});