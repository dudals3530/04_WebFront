/*인라인 이벤트 모델 확인 */

function check1(btn) {
  console.log(btn);
  //매개변수 btn == 클릭한 버튼 (this)

  //현재 버튼의 배경색을 어덩와 저장
  const bgcolor = btn.style.backgroundColor;

  //버튼이 클릭될때마다 pink < - > yeollow 변경
  if (bgcolor == "yellow") {
    btn.style.backgroundColor = "pink";
  } else {
    btn.style.backgroundColor = "yellow";
  }
}

//-------------

// 고전이벤트 모델확인

// 아이디가 test1-1인 요소를 얻어와 test1a 변수에 저장

const test1a = document.querySelector("#test1-1");

// ** 고전 이벤트 모델 작성법 **
// 요소.이벤트리스너 = 이벤트 핸들러

test1a.onclick = function () {
  alert("고전 이벤트 모델확인 버튼 클릭됨.");
};

// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭시
// #test1-1 의 onclick 이벤트리스너의 이벤트 핸들러 제거하기

document.querySelector("#test1-2").onclick = function () {
  //기존 onclick의 이벤트 핸들러 (함수)를
  // null로 덮어 씌움 (이벤트 제거)
  test1a.onclick = null;
  alert("이벤트 제거됨");
};

// 고전 이벤트 모델 단점

// #test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

//test1-3 요소가 클릭 되었을때 배경색 빨간색으로 변경
test1c.onclick = function () {
  test1c.style.backgroundColor = "red";
};

//시간이 지난뒤
// 요런식으로 작성하게되면 덮어씌우기가 되버림.
test1c.onclick = function () {
  test1c.style.backgroundColor = "white";
};

//onclic에 저장된 값이 덮어 씌워지면서
//이전코드 (배경색 red)가 사라지는 문제발생

// --------------------------------------------------

// 표준 이벤트 모델 확인
const test2 = document.querySelector("#test2");
let curr = test2.style.opacity;

//** 표준 이벤트 모델 작성법 *****/
// 요소.addEventListener("이벤트 종류" ,이벤트 핸들러 (함수));

test2.addEventListener("click", function () {
  //투명도 1 (불투명 ) - > 0 (투명) 0.1씩 감소

  //현재  #test2 의 투명도확인
  // opacity ->  투명도 를 나타내는 함수

  console.log(curr);
  // 맨처음에는 투명도 ;; -> 1대입
  if (curr == "") {
    test2.style.opacity = 1;
    curr = 1;
  }

  // 투명도 0.1 씩 감소
  test2.style.opacity = curr - 0.1;

  if (test2.style.opacity == 0) {
    // 완전히 투명해진다면
    test2.style.opacity = 1; // 다시 불투명하게 바꿔라
  }
});

// #test2  요소를 클릭하면 클릭 횟수 카운트
let count = 0;

test2.addEventListener("click", function () {
  count++; // 카운트 1증가

  //표준 이벤트 모델의 이벤트 핸들러 내부에서 this
  // == 이벤트가 발생한 요소
  this.innerText = count;
});

// -----------------------------------------
// 표준 모델
// 요구사항
//1. input에 작성한 배경색 "Enter" 입력시 적용
//2. 배경 div 클릭시 alert 창에 해당 배경색 출력
// - > 표준 이벤트모델사용하기

const bx = document.querySelector("#box3");
const input = document.querySelector("#input3");

input.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    let str = input.value;
    bx.style.backgroundColor = str;

    if (bx.style.backgroundColor !== "") {
      bx.addEventListener("click", function () {

        //e.target : 이벤트가 발생한 대상 요소 == this
        alert(`배경색은 ${bx.style.backgroundColor}입니다.`);
      });
    }
  }
});
