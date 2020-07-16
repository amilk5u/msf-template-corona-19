$(document).ready(function(){
  //1. 네비게이션 클릭 애니메이션
  $(".gnb li a").click(function(){
    var selector=$(this).attr("href");
    $("html, body").stop().animate({ scrollTop:$(selector).offset().top-115 },500);
    return false;
  });
  //2. 이미지 로딩시 애니메이션
  setTimeout(function(){
    $(".visual_cont").addClass("on");
  }, 300);
  //3. 숫자 자동 카운트 기능:플러그인으로 해결
  $('.info_num').counterUp({
    delay: 10,
    time: 1000
  });
  /*
  //4. 섹션1 자세히 보기 클릭
  $(".sec1 .learn_more").click(function(){
    $("html, body").stop().animate({ scrollTop:$(".sec1 .info_box").offset().top - 115 },500);
  });//click END
  */
});//END
