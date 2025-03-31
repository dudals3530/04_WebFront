//배열 선언 및 기초 사용법

function check1() {
  // 배열 선언 방법 확인
  const arr1 = new Array(); // 비어있는 배열
  const arr2 = new Array(3); // 3칸짜리 비어있는 배열
  const arr3 = []; // 비어있는 배열
  const arr4 = ["사과", "바나나", "딸기"]; // 3칸짜리 값이 있는 배열

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);

  // 배열명.length : 배열의 길이(배열에 있는 칸 수 , 저장된 데이터 수 )
  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);

  //배열의 index
  // 뱌욜우ㅏ [index]
  // - > 배열의 해당 인덱스에 존재하는 데이터를 반환
  console.log("arr4[0] : ", arr4[0]);
  console.log("arr4[1] : ", arr4[1]);
  console.log("arr4[2] : ", arr4[2]);

  //배열명[index] = 값 ;
  // -> 해당 인덱스에 지정된 값 대입
  arr2[0] = 100;
  arr2[1] = "점심 뭐먹지?";
  arr2[2] = true;

  console.log("arr2 :", arr2);
  //js배열의 특징 : 인덱스 별로 자료형을 다르게 지정할수있따.
  // 개좋누 ??와 맥북으로 쓰니깐 타거감이 미쳣더 ..

  //길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가가능!!
  // 와 ... 개쩌는걸 ? ?...
  arr1[0] = "가";
  arr1[1] = "나";
  arr1[2] = "다";

  console.log("arr1 :", arr1);

  arr1[4] = "라";
  // 원하는 index에 값을 마등ㅁ대로 추가할수 있따.
  // -> 중간에 건너뛴 index는 빈칸으로 채워짐.
  console.log("arr1 :", arr1);
}

//배열과 for문
function check2() {
  //for문을 이용해서 배열 요소 초기화 하기 .
  const arr = [];

  for (let i = 0; i <= 3; i++) {
    arr[i] = i * 10;
  }
  console.log("arr: ", arr);
}

// 점심메뉴 뽑기
function check3() {
  //결과 출력 span
  const menuResult = document.getElementById("menuResult");

  //점심 메뉴로 초기화 된 배열 생성
  const menu = [
    "1제육볶음",
    "2돈까스",
    "3파스타",
    "4순대국",
    "5닭갈비",
    "6초밥",
    "7삼겹살",
    "8햄버거",
    "9알탕",
    "10피자",
    "11백반",

    //ment 배열 index 범위 내에서 난수 생성
  ]; // 길이 11

  const randomNumber = Math.floor(Math.random() * menu.length);
  //Math.floor () 이용시 소수점 이하가버려져 정수 범위만 출력
  // 0 이상 10 이하 의 난수값이 발생함 ..

  //난수 번째 index 요소 값을 화면에출력
  menuResult.innerText = menu[randomNumber];
}
