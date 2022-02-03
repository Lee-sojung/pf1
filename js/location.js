var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const t_on = document.querySelectorAll(".traffic li")[0];
const t_off = document.querySelectorAll(".traffic li")[1];

const branch_btns = document.querySelectorAll(".branch li");

let drag = true; //드래그 가능
let zoom = true; //확대축소 가능


var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.5070121,126.756248), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성
//--------------------------------------------------------------------

var markerOptions = [
    {
        title: '본점', 
        latlng: new kakao.maps.LatLng(37.5070121,126.756248),
        imgSrc : 'img/1.png',
        imgSize : new kakao.maps.Size(50, 70),
        imgPos : {offset: new kakao.maps.Point(116, 99)},
        button : branch_btns[0]
    },
    {
        title: '지점1', 
        latlng: new kakao.maps.LatLng(33.450936, 126.569477),
        imgSrc : 'img/2.png',
        imgSize : new kakao.maps.Size(50, 70),
        imgPos : {offset: new kakao.maps.Point(116, 99)},
        button : branch_btns[1]
    },
    {
        title: '지점2', 
        latlng: new kakao.maps.LatLng(37.4984865,126.9186678),
        imgSrc : 'img/3.png',
        imgSize : new kakao.maps.Size(50, 70),
        imgPos : {offset: new kakao.maps.Point(116, 99)},
        button : branch_btns[2]
    }
];

for(let i=0; i<markerOptions.length; i++){
    new kakao.maps.Marker({
        map: map,
        position: markerOptions[i].latlng,
        title : markerOptions[i].title,
        image : new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
    });


    markerOptions[i].button.onclick = e=>{
        e.preventDefault();

        for(let k=0; k<markerOptions.length; k++){
            markerOptions[k].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");

        moveTo(markerOptions[i].latlng);
    }
}


//브라우저 리사이즈시 현재 활성화 되어있는 버튼의 data-index를 구해서 setCenter에 적용
window.onresize = ()=>{
    let active_btn = document.querySelector(".branch li.on");
    let active_index = active_btn.getAttribute("data-index");
    map.setCenter(markerOptions[active_index].latlng);
}







//컨트롤보이기
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

//var zoomControl = new kakao.maps.ZoomControl();
//map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


//지도 이동 함수 정의
function moveTo(target) {            
    var moveLatLon = target;
    map.setCenter(moveLatLon);
}

//지도 드래그 가능여부 함수 설정
setDraggable(drag);
function setDraggable(draggable) {
    // 마우스 드래그로 지도 이동 가능여부를 설정합니다
    map.setDraggable(draggable);    
}

//지도 확대 축소 가능여부 함수 설정
setZoomable(zoom);
function setZoomable(zoomable) {
    // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
    map.setZoomable(zoomable);    
}




//교통정보 보기/끄기 버튼 클릭시
t_on.addEventListener("click", e=>{
    e.preventDefault();
    if(t_on.classList.contains("on")) return;
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    t_on.classList.add("on");
    t_off.classList.remove("on");
});

t_off.addEventListener("click", e=>{
    e.preventDefault();
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 

    t_on.classList.remove("on");
    t_off.classList.add("on");
});



