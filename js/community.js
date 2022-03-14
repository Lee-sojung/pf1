//탭버튼 기능 
const btnsTab = document.querySelectorAll('#community #tabbtns li');
const boxsTab = document.querySelectorAll('#community .container>div');

btnsTab.forEach((btn, idx)=>{
  btn.addEventListener('click', e=>{
    e.preventDefault();

    for(const btn of btnsTab) btn.classList.remove('on');
    for(const box of boxsTab) box.classList.remove('on');

    btnsTab[idx].classList.add('on');
    boxsTab[idx].classList.add('on');
  })  
})


//faq toggle
const toggleWrap = document.querySelectorAll('.panel-question');

toggleWrap.forEach((item, idx)=>{
  const btn = item.querySelector('.panel-heading');

  btn.addEventListener('click', e =>{
    for(const toggled of toggleWrap) toggled.classList.remove('on');
    toggleWrap[idx].classList.add('on');
  })
})


//countdown
const countDays = '1 may 2022';
function countdown(){
  const conutDaysDate = new Date(countDays);
  const currentDate = new Date();

  const totalSeconds = (conutDaysDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  document.getElementById('days').innerText = formatTime(days);
  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time){
  return time <10 ? '0' + time : time;
}

setInterval(countdown, 1000);