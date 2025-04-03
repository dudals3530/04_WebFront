const resName = document.querySelector("#resName"); //식당명
const resNameInput = document.querySelector("#resNameInput"); //식당명input 태그

const updateBtn = document.querySelector("#updateBtn"); //수정버튼
const hiddenBtn = document.querySelector(
  ".btn-container.edit-container.b-hidden"
); //숨겨진버튼들의 div

const addMenu = document.querySelector("#addMenu"); // 추가버튼
const deleteMenu = document.querySelector("#deleteMenu"); //삭제버튼
const exitBtn = document.querySelector("#exitBtn"); // 종료버튼

resName.addEventListener("click", () => {
  resName.classList.add("res-name-hidden");
  resNameInput.classList.remove("res-name-hidden");
  resName.textContent = ""; //클릭했을때 '식당명' 을 없애버렷
  resNameInput.value = resName.textContent; // 식당명의 input.value 와 <span>식당명</span> 을 대입해줘야함.
});

resNameInput.addEventListener("blur", () => {
  //focus 잃엇을때  html 구조랑 똑같이 만들어버렷
  resName.textContent = resNameInput.value;
  resName.classList.remove("res-name-hidden");
  resNameInput.classList.add("res-name-hidden");
});

updateBtn.addEventListener("click", () => {
  //수정버튼을 클릭시
  updateBtn.classList.add("b-hidden"); // 수정버튼은 숨기고

  hiddenBtn.classList.remove("b-hidden"); // 숨겨져있던 버튼들의 div의 hidden클래스를 없앰으로 보여줌 ..
  // 근데 css에서 b-show도 있떤데 이건뭔역할? ..

  const menuItems = document.querySelectorAll(".menu");
  for (let i = 0; i < menuItems.length; i++) {
    // 메뉴라는 클래스를 가지고있는 모든 요소들의 전부다선택하기위해
    // for문을돔
    change(menuItems[i]); // 해당 i번째 메뉴를 만나면 그걸 들고 change 메서드 실행
  } //
});

function change(menu) {
  // change메서드가 실행되면  가지고온 menu들을 깐다는느낌
  const spans = menu.querySelectorAll("span");
  // 메뉴의 모든 span 태그를 가져오기
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox"; //메뉴 옆에 <input type ="checbox"> 잇는데 이거 만들어줄준비

  checkbox.setAttribute("class", "ck"); //나중에 if문쓰려면 클래스 주는게 편함

  menu.appendChild(checkbox); // 먼저 미리 메뉴 안에다가 appedchild를 이용해서 메뉴에
  //체크박스를 붙여주자 안그럼 나중에 조립할때 순서뒤틀림 다른메서드 prepend, after,before를써야되는 상황이 생김 .  그래서 그냥 지금붙여줌
  for (let i = 0; i < spans.length; i++) {
    const input = document.createElement("input"); // span 태그를 input으로 대체시킬꺼임 그래서 생성해둠
    const span = spans[i]; //이젠 또 for문을 돌아 span의 content를 가져와
    let text = span.textContent; // text에다가 저장시켯

    if (/^\d+원$/.test(text)) { 
                                                      // 이게 정규식표현이래 ...ㅎㄷㄷ 만약 text의 숫자 + 원으로만 되어있으면
      text = text.replace(/[^0-9]/g, "");       //  replace를 이용하여 숫자로만 만들어주기  replace 개유용함 ㅇㅇ
    }                                                // replace 꼮꼮 기억해두자
    
    input.value = text;
    input.type = "text";
    input.className = span.className; // input태그와 span태그들의 클래스네임을 갖게해 add,remove를 안쓰고도할수잇음

    menu.appendChild(input); //부모인 menu에 접근해 appendChild로 자식객체 input을 붙여주자
    span.remove();
  }
}

// prepend, after, before

addMenu.addEventListener("click", () => {
  //추가버튼누를시
  const ul = document.querySelector(".menu-container"); //html 구조대로 ul을 먼저만들어줌

  const checkbox = document.createElement("input"); //근데 우린 위에서 수정눌럿을때  checkbox도잇기때문에 만들어줘야함
  checkbox.type = "checkbox";
  checkbox.setAttribute("class", "ck"); // if문쓰기위해 똑같은 class로줌

  const inputMenu = document.createElement("li"); //똑같이 만들어주자 li
  inputMenu.classList.add("menu"); //html 구조 그대로 class도 붙여줌

  const inputMenuName = document.createElement("input");
  inputMenuName.type = "text";
  inputMenuName.placeholder = "미입력"; //plaeholder도 붙일수잇음
  inputMenuName.classList.add("menu-name");

  const inputMenuPrice = document.createElement("input");
  inputMenuPrice.type = "text";
  inputMenuPrice.placeholder = "0원";
  inputMenuPrice.classList.add("menu-price"); // 가격 또한 마찬가지로 만들어줫음

  inputMenu.appendChild(checkbox);
  inputMenu.appendChild(inputMenuName); //  조립중..
  inputMenu.appendChild(inputMenuPrice);

  ul.appendChild(inputMenu); // 이거싹다 조립시켜서 ul에다가 붙이면 끝임
  // appendChild가 부모의 마지막 자식으로 붙어서 좋음ㅇㅇ
});

deleteMenu.addEventListener("click", () => {
  const menuList = document.querySelectorAll(".menu");

  for (let i = 0; i < menuList.length; i++) {
    const checkbox = menuList[i].querySelector(".ck");
    if (checkbox.checked) {
      menuList[i].remove();
    }
  }
});

exitBtn.addEventListener("click", () => {
  const menuList = document.querySelectorAll(".menu");

  updateBtn.classList.remove("b-hidden");

  hiddenBtn.classList.add("b-hidden");

  for (let i = 0; i < menuList.length; i++) {
    const inputName = menuList[i].querySelector(".menu-name");
    const inputPrice = menuList[i].querySelector(".menu-price");
    const checkbox = menuList[i].querySelector(".ck");

    let nameText = inputName.value;
    let priceText = inputPrice.value;

    inputName.remove();
    inputPrice.remove();
    checkbox.remove();

    const spanName = document.createElement("span");
    spanName.classList.add("menu-name");

    if (nameText.length === 0) {
      spanName.textContent = "미입력 메뉴?";
    } else {
      spanName.textContent = nameText;
    }

    const spanPrice = document.createElement("span");
    spanPrice.classList.add("menu-price");

    if (priceText.length === 0) {
      spanPrice.textContent = "가격 없음 ?";
    } else if (/^\d+$/.test(priceText)) {
      // 만약 input에 숫자만 있었으면

      spanPrice.textContent = `${priceText}원`; // span태그의 content를 바꿀 때 원을 붙여줌.
    } else {
      spanPrice.textContent = priceText;
    }

    menuList[i].appendChild(spanName);
    menuList[i].appendChild(spanPrice);
  }
});
