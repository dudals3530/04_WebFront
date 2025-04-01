const boxes = document.querySelectorAll(".box");
const strs = document.querySelectorAll(".color-input");


const btn = document.querySelector("#changeButton")

btn.addEventListener("click", function() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = strs[i].value;
  }
});


