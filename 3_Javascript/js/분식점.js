const resName = document.querySelector("#resName");
const resNameInput = document.querySelector("#resNameInput");
const container = document.querySelector(".res-name-container");

const updateBtn = document.querySelector("#updateBtn");
const hiddenBtn = document.querySelector(
  ".btn-container.edit-container.b-hidden"
);
const addMenu = document.querySelector("#addMenu")

resName.addEventListener("click", () => {
  resName.classList.add("res-name-hidden");
  resNameInput.classList.remove("res-name-hidden");
  resName.textContent = "";
  resNameInput.value = resName.textContent;
});

resNameInput.addEventListener("blur", () => {
  resName.textContent = resNameInput.value;
  resName.classList.remove("res-name-hidden");
  resNameInput.classList.add("res-name-hidden");
});

updateBtn.addEventListener("click", () => {
  updateBtn.classList.add("b-hidden");

  //hiddenBtn.classList.remove("edit-container");
  hiddenBtn.classList.remove("b-hidden");
  hiddenBtn.classList.add("b-show");

  const menuItems = document.querySelectorAll(".menu");
  for (let i = 0; i < menuItems.length; i++) {
    change(menuItems[i]);
  }
});

function change(menu) {
  const spans = menu.querySelectorAll("span");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("class", "ck");

  if (spans.length > 0) {
    menu.insertBefore(checkbox, spans[0]);
  }

  for (let i = 0; i < spans.length; i++) {
    const input = document.createElement("input");
    const span = spans[i];
    let text = span.textContent;

    if (/^\d+원$/.test(text)) {
      text = text.replace(/[^0-9]/g, "");
    }
    input.value = text;
    input.type = "text";
    input.className = span.className;
    menu.replaceChild(input, span);
  }
}

addMenu.addEventListener("click",()=>{

    document.c
});


