$(document).ready(function () {
    // ******  메뉴  ****** //
    $('.navi>li').mouseover(function () {
        $(this).find('.subMenu').stop().slideDown(500);
    }).mouseout(function () {
        $(this).find('.subMenu').stop().slideUp(500);
    });

    /* 메소드 설명
   mouseover() 메소드는 선택한 요소의 영역에서 마우스를 올렸을 때 이벤트가 발생됩니다.
   또는 선택한 요소에 mouseover() 이벤트를 강제로 발생시킬 때 사용합니다.
 
   기본형 : mouseover()
   $("요소선택").mouseover(function(){...});
   선택한 요소의 영역에 마우스를 올렸을 때 실행문을 실행합니다.
 
   $("요소선택").mouseover()
   선택한 요소에 강제로 mouseover이벤트를 발생시킵니다.
 
 
   mouseout() 메소드는 선택한 요소의 영역에서 마우스가 벗어났을 때 이벤트가 발생합니다. 
   이때 하위 영향을 받습니다.
 
   또는 선택한 요소에 mouseout() 이벤트를 강제로 발생시킬 때 사용합니다.
 
   기본형 : mouseout()
   $("요소선택").mouseout(function(){...});
   선택한 요소의 영역에서  마우스가 벗어났을 때 실행문을 실행합니다.
   $("요소선택").mouseout()
   선택한 요소에 강제로 mouseout 이벤트를 발생시킵니다.
 
   stop() : 선택한 요소에 현재 실행중인 효과 또는 애니메이션이 적용된 효과를 모두 정지시킵니다. 정지시킵니다. 
   기본형 : $("요소선택").stop()
   */



    // ******  이미지 슬라이드  ****** //
    //[1] 변수 선언 및 초기화
    const imgs = 2;
    let now = 0;
    //[2] 이미지슬라이드의 첫번째 이미지의 형제 들을 모두 left -3000px 적용
    $(".imgSlide>a").eq(0).siblings().animate({
        left: "-3000px"
    });
    //[3] setInterval 메소드 3초 간격으로 실행
    setInterval(function () {
        now = now == imgs ? 0 : now += 1;
        $(".imgSlide>a").eq(now - 1).animate({
            left: "-3000px"
        });
        $(".imgSlide>a").eq(now).animate({
            left: "0"
        });
    }, 3000);

    /* 메소드 설명
   eq() : 선택한 요소의 특정 인덱스 번호 요소 반환 (element queue 약자) 
   사용법 $(“요소선택).eq(index)
   
   siblings() : 선택한 요소의 모든 형제 요소 반환
   
   animate() : 선택한 요소에 다양한 동작 효과 적용 
   사용법 $("요소 선택").animate({①애니메이션 속성}, ②효과 속도, ③콜백함수)
 
   setInterval() : 일정한 시간 간격으로 스크립트 실행문을 반복하여 실행시킬 때
   사용법 setInterval({실행문}, 시간 간격 )
   시간 간격 -> 1/1000초 단위인 밀리초(mic) 단위로 작성. ex) 3초 => 3000
   */

    // ******  Modal 팝업  ****** //
    $(".notice li:nth-child(1)").click(function () {
        $("#modalWrap").addClass("active");
    });
    $(".btn").click(function () {
        $("#modalWrap").removeClass("active");
    });

    $(".notice li:nth-child(2)").click(function () {
        $("#modalwRap").addClass("active");
    });
    $(".btn").click(function () {
        $("#modalwRap").removeClass("active");
    });

    $(".notice li:nth-child(3)").click(function () {
        $("#modalwrAp").addClass("active");
    });
    $(".btn").click(function () {
        $("#modalwrAp").removeClass("active");
    });

    $(".notice li:nth-child(4)").click(function () {
        $("#modalwraP").addClass("active");
    });
    $(".btn").click(function () {
        $("#modalwraP").removeClass("active");
    });


    /* 메소드 설명
   addClass : 선택한 요소에 인수로 전달받은 클래스를 추가합니다.
   기본형 : addClass("클래스명")
   ex) addClass("active")
 
   removeClass : 선택한 요소에 인수로 전달받은 클래스를 삭제합니다.
   기본형 : removeClass("클래스명")
   ex) removeClass("active")
   */

});