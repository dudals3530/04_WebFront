// Node 확인하기

document.querySelector("#btn1").addEventListener("click", () => {

  const test = document.querySelector(`#test`); // ul

  console.log(test);

  //#test의 모든 자식 노드얻어오기
  // 요소.childNodes
  const list = test.childNodes;
  console.log(list);
  
})