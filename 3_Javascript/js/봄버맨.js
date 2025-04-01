
const bomberman =document.querySelector("#bomberman");

let bombs = [];

let position = { x: 0, y: 0 }; // 초기 위치를 저장하는 객체

let goblins = []; // 고블린을 저장하는 배열
let goblinPosition = { x: 200, y: 200 };



document.addEventListener("keydown", function(e){
  
 /* console.log(`Key: ${e.key}, KeyCode: ${e.keyCode}`);
                Key: ArrowDown, KeyCode: 40
    봄버맨.js:5 Key: ArrowUp, KeyCode: 38
    봄버맨.js:5 Key: ArrowLeft, KeyCode: 37
    봄버맨.js:5 Key: ArrowRight, KeyCode: 39  */

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
      case "x" :
        createBomb(position.x,position.y);
        break; 
      case "z" :  
        boom();
        break;
        default : alert("잘못 누르셧습니다");
    }
      //봄버맨 위치 저장시켜버려
    bomberman.style.transform = `translate(${position.x}px, ${position.y}px)`;

    checkCollision();
  });

  function createBomb(x,y) {
   const bomb = document.createElement("img");
    bomb.src = "/images/봄버맨/bomb.png";
    bomb.style.position = "absolute";
    
    // bomberman의 현재 위치 가져오기
    // getBoundingClientRect() 가 해당 포지션의 x,y 값을 가져오는 느낌 ?
     const rect = bomberman.getBoundingClientRect();
     bomb.style.left = `${rect.left}px`;
     bomb.style.top = `${rect.top}px`;


     // 해당 도큐먼트 바디에 해당 bomb를 자식요소로 추가시킨다
    document.body.appendChild(bomb);
    bombs.push(bomb);
  }

  function boom() {
    if (bombs.length > 0) {
      for (let i = 0; i < bombs.length; i++) {
        bombs[i].src = "/images/봄버맨/boomm.png"; // 모든 bomb 요소의 src 속성을 변경
        bombs[i].style.width = "50px"; // 초기 폭탄 크기
        bombs[i].style.height = "50px"; // 초기 폭탄 크기
        
        // 폭탄의 크기를 10px씩 키우기
        const increaseSizeInterval = setInterval(() => {
          let currentWidth = parseInt(bombs[i].style.width);
          let currentHeight = parseInt(bombs[i].style.height);
          bombs[i].style.width = `${currentWidth + 20}px`;
          bombs[i].style.height = `${currentHeight + 20}px`;
        }, 200);
  
        // 고블린과 폭탄의 충돌 체크
        checkBombCollision(bombs[i]);
  
        // increaseSizeInterval을 clear할 필요가 있으므로 bombs[i]에 저장
        bombs[i].increaseSizeInterval = increaseSizeInterval;
      }
  
      // 모든 폭탄을 2초 후에 제거
      setTimeout(() => {
        for (let i = 0; i < bombs.length; i++) {
          clearInterval(bombs[i].increaseSizeInterval);
          bombs[i].remove();
        }
  
        // 폭탄 배열 초기화
        bombs = [];
      }, 2000);
    } else {
      alert("폭탄이 없습니다.");
    }
  }


  function createGoblin() {
    const goblin = document.createElement("img");
    goblin.src = "/images/봄버맨/31952459-고블린.jpg";
    goblin.classList.add("goblin");

    const goblinPosition = { x: Math.random() * (box.clientWidth - 50), y: Math.random() * (box.clientHeight - 50) };
    goblin.style.left = `${goblinPosition.x}px`;
    goblin.style.top = `${goblinPosition.y}px`;

    box.appendChild(goblin);
    goblins.push({ element: goblin, position: goblinPosition });

    moveGoblin(goblin, goblinPosition);}


  function moveGoblin(goblin, goblinPosition) {
    const directions = ["up", "down", "left", "right"];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];


    switch (randomDirection) {
      case "up":
        if (goblinPosition.y > 0) goblinPosition.y -= 10;
        break;
      case "down":
        if (goblinPosition.y < box.clientHeight - goblin.clientHeight) goblinPosition.y += 10;
        break;
      case "left":
        if (goblinPosition.x > 0) goblinPosition.x -= 10;
        break;
      case "right":
        if (goblinPosition.x < box.clientWidth - goblin.clientWidth) goblinPosition.x += 10;
        break;
    }

    goblin.style.transform = `translate(${goblinPosition.x}px, ${goblinPosition.y}px)`;
    checkCollision();
  }

  // 0.5초마다 고블린을 움직이게 하는 interval 설정
  setInterval(function() {
    goblins.forEach(goblinObj => {
      moveGoblin(goblinObj.element, goblinObj.position);
    });
  }, 500);

  // 2초마다 새로운 고블린을 추가하는 interval 설정
  setInterval(createGoblin, 2000);

  function checkCollision() {
    const bombermanRect = bomberman.getBoundingClientRect();

    goblins.forEach(goblinObj => {
      const goblinRect = goblinObj.element.getBoundingClientRect();

      if (
        bombermanRect.left < goblinRect.right &&
        bombermanRect.right > goblinRect.left &&
        bombermanRect.top < goblinRect.bottom &&
        bombermanRect.bottom > goblinRect.top
      ) {
        alert("봄버맨이 죽었어요 ㅠ^ㅠ");
        document.documentElement.innerHTML = document.documentElement.innerHTML; // 페이지 리셋
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
      }
    });
  }