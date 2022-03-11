
//변수 저장 
const btns = document.querySelectorAll(".panel-heading"); 




//이벤트바인딩 
//btnCall을 클릭할 때 
btns.onclick = function(e){
    //링크이동 금지 
  e.preventDefault(); 
  //btnCall에 on이 있으면 제거, 없으면 추가 
    btns.classList.toggle("on"); 
}