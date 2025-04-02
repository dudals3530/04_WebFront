const addBtn = document.querySelector("#add"); //추가버튼
const calcBtn = document.querySelector("calc"); //계산버튼

addBtn.addEventListener("click", () => {
    //1. div 요소 생성
    const row = document.createElement("div");
  
    //2. row요소에 class 추가하기
    row.classList.add("row");
  
    //3. input 요소 생성
    const input = document.createElement("input");
  
    //4. type = "number"
    input.setAttribute("type", "number"); // <input type="number">
  
    input.classList.add("input-number");
  
    //6. span 요소 생성하기
    const span = document.createElement("span"); //<span></span>
  
    //7. span 요소에 class 추가하기
    span.classList.add("remove-row"); // <span class="remove-row"></span>
  
    //8. 내용으로 &times; 추가 (innerHTML 사용)
    span.innerHTML = "&times;"; //<span class="remove-row">&times;</span>
  
    //9. span 요소에 클릭 이벤트 추가하여 row 요소 제거
    span.addEventListener("click", () => {
      row.remove();
    });
  
    //--조립하기 --
  
    //10. div.row 요소에게 자식으로 input, span 추가
    row.append(input, span);
  
    //11. 완성된 div.row를 container의 마지막 자식으로 추가하기
    container.append(row);
  });
 
  addBtn.addEventListener("click", () => {
    //1. div 요소 생성
    const row = document.createElement("div");
  
    //2. row요소에 class 추가하기
    row.classList.add("row");
  
    //3. input 요소 생성
    const input = document.createElement("input");
  
    //4. type = "number"
    input.setAttribute("type", "number"); // <input type="number">
  
    input.classList.add("input-number");
  
    //6. span 요소 생성하기
    const span = document.createElement("span"); //<span></span>
  
    //7. span 요소에 class 추가하기
    span.classList.add("remove-row"); // <span class="remove-row"></span>
  
    //8. 내용으로 &times; 추가 (innerHTML 사용)
    span.innerHTML = "&times;"; //<span class="remove-row">&times;</span>
  
    //9. span 요소에 클릭 이벤트 추가하여 부모 요소 제거
    span.addEventListener("click", (e) => {
      const parent = e.target.parentElement; //div.row  
      parent.remove();
    });
  
    //--조립하기 --
  
    //10. div.row 요소에게 자식으로 input, span 추가
    row.append(input, span);
  
    //11. 완성된 div.row를 container의 마지막 자식으로 추가하기
    container.append(row);
  });

  calcBtn.addEventListener("click", () => {
    // 모든 input 요소 가져오기
    const numbers = document.querySelectorAll(".input-number");
  
    // 값을 합산하기 위한 변수 초기화
    let sum = 0;
  
    // 모든 input 요소를 순회하면서 값을 합산 (for 문 사용)
    for (let i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i].value); // input 값을 숫자로 변환하여 합산
    }
  
    // 합계를 alert로 출력
    alert(`합계는 ${sum}입니다.`);
  });