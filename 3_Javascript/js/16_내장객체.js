//window.setTimeout()
document.getElementById("btn1").addEventListener("click", () => {
  setTimeout(function () {
    alert("3초후출력");
  }, 3000);
});

//window,setInterval()

let interval; // setInterval을 저장하기 위한 전역변수

//현재 시간 문자열로 반환 함수
function currentTime() {
  const now = new Date();
  //console.log(now);

  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  //1의자리만 나올때 1,2 이렇게 나옴
  //디지털 시계 모양에 따라 1의자리여도 01,02 .. 표현하려고한다.

  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  return hour + ":" + min + ":" + sec;
}

currentTime();

function clockFn() {
  const clock = document.getElementById("clock");
  clock.innerText = currentTime();

  interval = setInterval(function(){
    clock.innerText = currentTime();
  },1000);
}

clockFn();//함수 호출

document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(interval);
})

