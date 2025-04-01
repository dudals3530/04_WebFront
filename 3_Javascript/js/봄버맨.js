const bomberman = document.querySelector("#bomberman");
const goblinCountSpan = document.querySelector("#goblinCount");

let bombs = [];
let position = { x: 0, y: 0 }; // 초기 위치를 저장하는 객체
let goblins = []; // 고블린을 저장하는 배열
let goblinPosition = { x: 200, y: 200 };
let destroyedGoblinCount = 0; // 이건 변신조건 count
let isTransformed = false; // 봄버맨이 변신 상태인지 확인하는 변수
let goblinsRemovedCount = 0; //고블린현재 몇마리잡앗는지

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowDown":
      position.y += 10;
      break;
    case "ArrowUp":
      position.y -= 10;
      break;
    case "ArrowRight":
      position.x += 10;
      break;
    case "ArrowLeft":
      position.x -= 10;
      break;
    case "x":
      createBomb(position.x, position.y);
      break;
    case "z":
      boom();
      break;
    default:
      alert("잘못 누르셨습니다");
  }
  // 봄버맨 위치 저장시켜버려
  bomberman.style.transform = `translate(${position.x}px, ${position.y}px)`;

  checkCollision();
});

function createBomb(x, y) {
  const bomb = document.createElement("img");
  bomb.src = "/images/봄버맨/bomb.png";
  bomb.style.position = "absolute";

  const rect = bomberman.getBoundingClientRect();
  bomb.style.left = `${rect.left}px`;
  bomb.style.top = `${rect.top}px`;

  document.body.appendChild(bomb);
  bombs.push(bomb);
}

function boom() {
  if (bombs.length > 0) {
    for (let i = 0; i < bombs.length; i++) {
      bombs[i].src = "/images/봄버맨/boomm.png";
      bombs[i].style.width = "50px";
      bombs[i].style.height = "50px";

      const increaseSizeInterval = setInterval(() => {
        let currentWidth = parseInt(bombs[i].style.width);
        let currentHeight = parseInt(bombs[i].style.height);

        if (currentWidth < 80 && currentHeight < 80) {
          bombs[i].style.width = `${currentWidth + 10}px`;
          bombs[i].style.height = `${currentHeight + 10}px`;
        } else {
          clearInterval(increaseSizeInterval);
        }

        checkBombCollision(bombs[i]);
      }, 200);

      bombs[i].increaseSizeInterval = increaseSizeInterval;
    }

    setTimeout(() => {
      for (let i = 0; i < bombs.length; i++) {
        clearInterval(bombs[i].increaseSizeInterval);
        bombs[i].remove();
      }

      bombs = [];
    }, 2000);
  } else {
    alert("폭탄이 없습니다.");
  }
}

function createGoblin() {
  if (goblins.length >= 6) {
    return;
  }

  const goblin = document.createElement("img");
  goblin.src = "/images/봄버맨/31952459-고블린.jpg";
  goblin.classList.add("goblin");
  goblin.style.border = "1px solid red";

  const goblinPosition = {
    x: Math.random() * (box.clientWidth - 50),
    y: Math.random() * (box.clientHeight - 50),
  };
  goblin.style.left = `${goblinPosition.x}px`;
  goblin.style.top = `${goblinPosition.y}px`;

  box.appendChild(goblin);
  goblins.push({ element: goblin, position: goblinPosition });

  moveGoblin(goblin, goblinPosition);
}

function moveGoblin(goblin, goblinPosition) {
  const directions = ["up", "down", "left", "right"];
  const randomDirection =
    directions[Math.floor(Math.random() * directions.length)];

  switch (randomDirection) {
    case "up":
      if (goblinPosition.y > 0) goblinPosition.y -= 10;
      break;
    case "down":
      if (goblinPosition.y < box.clientHeight - goblin.clientHeight)
        goblinPosition.y += 10;
      break;
    case "left":
      if (goblinPosition.x > 0) goblinPosition.x -= 10;
      break;
    case "right":
      if (goblinPosition.x < box.clientWidth - goblin.clientWidth)
        goblinPosition.x += 10;
      break;
  }

  goblin.style.transform = `translate(${goblinPosition.x}px, ${goblinPosition.y}px)`;
  checkCollision();
}

// 0.5초마다 고블린을 움직이게 하는 interval 설정
setInterval(function () {
  goblins.forEach((goblinObj) => {
    moveGoblin(goblinObj.element, goblinObj.position);
  });
}, 500);

// 2초마다 새로운 고블린을 추가하는 interval 설정
setInterval(createGoblin, 2000);

function checkCollision() {
  const bombermanRect = bomberman.getBoundingClientRect();

  goblins.forEach((goblinObj) => {
    const goblinRect = goblinObj.element.getBoundingClientRect();

    if (
      bombermanRect.left < goblinRect.right &&
      bombermanRect.right > goblinRect.left &&
      bombermanRect.top < goblinRect.bottom &&
      bombermanRect.bottom > goblinRect.top
    ) {
      if (isTransformed) {
        console.log("충돌: 고블린 제거");
        goblinObj.element.remove();
        goblins.splice(goblins.indexOf(goblinObj), 1);
        goblinsRemovedCount++;
        goblinCountSpan.textContent = goblinsRemovedCount;
      } else {
        console.log("충돌: 봄버맨 사망");
        alert("봄버맨이 죽었어요 ㅠ^ㅠ");
        document.documentElement.innerHTML = document.documentElement.innerHTML; // 페이지 리셋
      }
    }
  });
}

function checkBombCollision(bomb) {
  const bombRect = bomb.getBoundingClientRect();

  goblins.forEach((goblinObj, index) => {
    const goblinRect = goblinObj.element.getBoundingClientRect();

    if (
      bombRect.left < goblinRect.right &&
      bombRect.right > goblinRect.left &&
      bombRect.top < goblinRect.bottom &&
      bombRect.bottom > goblinRect.top
    ) {
      // 고블린을 제거
      goblinObj.element.remove();
      goblins.splice(index, 1);
      destroyedGoblinCount++;
      goblinsRemovedCount++;
      goblinCountSpan.textContent = goblinsRemovedCount;
      checkGoblinDestructionCount();
    }
  });
}

function checkGoblinDestructionCount() {
  if (destroyedGoblinCount >= 3) {
    transformBomberman();
    destroyedGoblinCount = 0; // 초기화
  }
}
function transformBomberman() {
  isTransformed = true;
  bomberman.src = "/images/봄버맨/초사이어인.png"; // 변신 상태를 시각적으로 표시 (예: 이미지 변경)
  bomberman.style.width = "100px"; // 변신 시 사이즈 키우기
  bomberman.style.height = "100px"; // 변신 시 사이즈 키우기
  console.log("봄버맨 변신");

  setTimeout(() => {
    isTransformed = false;
    bomberman.src = "/images/봄버맨/bomberman.png"; // 원래 상태로 복귀 (예: 원래 이미지로 복귀)
    bomberman.style.width = "50px"; // 원래 사이즈로 복귀
    bomberman.style.height = "50px"; // 원래 사이즈로 복귀
    console.log("봄버맨 원래 상태로 복귀");
  }, 5000); // 변신 상태 5초 유지
}
