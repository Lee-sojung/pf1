const swiper = new Swiper('.eventswiper', {
    // Optional parameters
      direction: 'vertical', //'vertical' 슬라이딩 방향
      loop: true, //false, - 슬라이딩 순환여부 결정
      speed : 500, //슬라이딩 되는 속도 (0.5초)
      spaceBetween :0, //사이간격
      slidesPerView :1, //하나의 화면당 보일 패털 갯수
      grabCursor :true, //스와이프시 마우스 커서모양 변경
      autoplay :{ //자동롤링
        delay:1000,
        disableOnInteraction : true
          //롤링중에 스와이프되면 롤링 중지(true)
          //롤링중에 스와이프 되더라도 롤링 계속(false)
        },


    // 페이징버튼 옵션
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",   
        },

    // 좌우버튼 옵션
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
});

    //페이지 로딩시 자동롤링 정지상태로 
    swiper.autoplay.stop();