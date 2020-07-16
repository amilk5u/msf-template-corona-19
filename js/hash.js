$(document).ready(function () {
	//var ff=$('.section').first().attr("id");
  var videoPlayer=$(".video_wrap iframe");
  var autoPlayValue=true;
	//var by="#"+ff;
  var aArray = [];
  $(".m_cont").each(function() {
		if($(this).attr("id")){
			var ahref = $(this).attr("id");
			aArray.push("#"+ahref);
		}
	});
  var $hashval=0;
	var $groupid="";
	//초기 설정
	$("a[href='#emergency']").addClass("active");
	//스크롤 기능
	$(window).scroll(function(){
    //변수 설정
		var windowPos = $(window).scrollTop();
		var windowHeight = $(window).height();
		var docHeight = $(document).height();
    //hash 적용
    for (var i=0; i < aArray.length; i++) {
			var theID = aArray[i];
			var divPos = $(theID).offset().top-115;
			var divHeight = $(theID).height();
			if (windowPos >= (divPos) && windowPos < (divPos + divHeight)) {
				if($hashval!=(i+1)){
					history.replaceState("","",theID);
					$hashval=i+1;
				}
				if($groupid!=$(theID).attr("data-nav")) $groupid=$(theID).attr("data-nav");
	    	$("a[href='#" + $groupid + "']").addClass("active");
				by="#"+$groupid;
			} else {
				$("a[href='" + theID + "']").removeClass("active");
			}
		}
    //nav fixed
    if(windowPos>=115){
      $("header").addClass("on");
    }else{
      $("header").removeClass("on");
    }
    //video play
    var videoPos=$(".sec1 .info_box").offset().top - 115;
    if(windowPos>=200){
      if(autoPlayValue==true){
        videoPlayer.attr("src","https://www.youtube.com/embed/Xy2MSSIpNHE?autoplay=1&loop=1&rel=0&showinfo=0");
        autoPlayValue=false;
      }
    }
	});//scroll function
});//
