$(document).ready(function(){
  var vw18=$(window).width()*0.18;
  var aArray = [];
  var $hashval=0;
	var $groupid="";
  var count=0;
  $(".section").each(function() {
    if($(this).attr("id")){
      var ahref = $(this).attr("id");
      aArray.push("#"+ahref);
    }
  });
  //1. scroll Event
  $(window).scroll(function(){
    //변수 설정
		var windowPos = $(window).scrollTop();
		var windowHeight = $(window).height();
		var docHeight = $(document).height();
    //hash 적용
    for (var i=0; i < aArray.length; i++) {
			var theID = aArray[i];
			var divPos = $(theID).offset().top - 80;
			var divHeight = $(theID).height();
			if (windowPos >= (divPos) && windowPos < (divPos + divHeight)) {
				if($hashval!=(i+1)){
					history.replaceState("","",theID);
					$hashval=i+1;
          count=i;
				}
			}
		}
    //nav fixed
    if(windowPos>=vw18){
      $(".header").addClass("on");
    }else{
      $(".header").removeClass("on");
    }
	});//scroll function
  //2.이전 다음 클릭
  $(".prev").click(function(){
    count<=0?count=0:count=count-1;
    $("html, body").stop().animate({ scrollTop:$(aArray[count]).offset().top - vw18 },500);
  });//click END
  $(".next").click(function(){
    count>=4?count=4:count=count+1;
    $("html, body").stop().animate({ scrollTop:$(aArray[count]).offset().top - vw18 },500);
  });//click END
  //3. 숫자 자동 카운트 기능:플러그인으로 해결
  $('.count').counterUp({
    delay: 10,
    time: 500
  });
  //4. 섹션1 자세히 보기 클릭
  $(".s1 .learn_more").click(function(){
    $("html, body").stop().animate({ scrollTop:$(".s1 .title_box").offset().top - vw18 },500);
  });//click END
});//END
