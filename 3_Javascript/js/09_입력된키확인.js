//문자열.toLowerCase() : 영어를 모두 소문자로변경 (A ->a)
//문자열.toUpperCase() : 영어를 모두 대문자로 변경(a-> A)

const inq = document.querySelector(".key-box > .key:nth-of-type(1)");
const inw = document.querySelector(".key-box > .key:nth-of-type(2)");
const ine = document.querySelector(".key-box > .key:nth-of-type(3)");
const inr = document.querySelector(".key-box > .key:nth-of-type(4)");

const str = {
  1: "red",
  2: "black",
  3: "green",
  4: "yellow",
  5: "pink",
  6: "magenta",
};

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "Q") {
    let num = Math.floor(Math.random() * Object.keys(str).length) + 1;
    inq.style.backgroundColor = str[num];
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key.toUpperCase() === "Q") {
    inq.style.backgroundColor = "white";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "W") {
    let num = Math.floor(Math.random() * Object.keys(str).length) + 1;
    inw.style.backgroundColor = str[num];
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key.toUpperCase() === "W") {
    inw.style.backgroundColor = "white";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "E") {
    let num = Math.floor(Math.random() * Object.keys(str).length) + 1;
    ine.style.backgroundColor = str[num];
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key.toUpperCase() === "E") {
    ine.style.backgroundColor = "white";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "R") {
    let num = Math.floor(Math.random() * Object.keys(str).length) + 1;
    inr.style.backgroundColor = str[num];
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key.toUpperCase() === "R") {
    inr.style.backgroundColor = "white";
  }
});

//입력된 키를 소문자로 바꿔서 일치하는 CASE 실행
/*
                 document.addEventListener("keydown",function(e)){
                  console.log(e.key);
                  let idx; // 인덱스 값을 저장할 변수

                  //입력된 키를 소문자로 바꿔서 일치하는 CASE 실행
                  switch(e.key.toLowerCase()){
                    case 'q' : idx = 0; break    
                    case 'w' : idx = 1; break    
                    case 'e' : idx = 2; break    
                    case 'r' : idx = 3; break
                    default : return; // 함수종료    
                  
                  
                  }
                  keys[idx].style.backgrooundColr="white";

                 }
                */

// 화면에 존재하는 key 모두 얻어오기
// const keys = document.querySelectorAll(".key");
// 키보드 이벤트 핸들러 함수
/*function changeKeyColor(e,color){
                                e : 이벤트종류 객체
                                color : 색상
                      const keyMap = {'q' : 0,'w':1 ,'e':2 , 'r':3};
                      const idx = keyMap[e.key.toLowerCase()];
                      
                      if (idx ! = undefined){
                      keys[idx].style.backgroundColor = color;}

                      doucument.addEventListener("keydown",(e) => changeKeyColor(e, "deepPink"));
                      doucument.addEventListener("keyup",(e) => changeKeyColor(e,"white"));
                      

                 
                 }*/
