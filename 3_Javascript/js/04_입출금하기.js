// prompt 사용연습

function test(){

  const password = prompt("비밀번호를 입력하세요");

  console.log(password);
  //확인 - > 입력한 값이 문자열로 저장
  //취소 - > null

  if(password == null){ //취소
  
    alert("취소");
  
   }else{ //확인
    
     if(password == '1234'){
       alert("비밀번호 일치");
     
      }else{
       alert("비밀번호 불일치!");
     }
  }

} 

// ------------------------------------------------

const output = document.getElementById("output");
// 잔액 출력 span

const amount = document.getElementById("amount");
// 금액작성 input

let balance =10000; // 잔액 기록 변수 (초기값 10000);
const pw = '1234'; //비밀번호 저장변수(비밀번호1234)

output.innerText = balance; // 초기금액 화면 출력


// 입금 함수
function deposit(){
 // amount.value = Number(amount.value);
  // console.log(amount.value.length);

  if(amount.value.length == 0){
    alert("금액을 입력해주세요");
  }else{
    //구한 금액을 잔액에 누적
  } balance += Number(amount.value);
// balance = balance + Number(amount.value);
   output.innerText = balance;
   amount.value='';
}

//출금함수
function withdrawal(){
 
  
  if(amount.value.length == 0){
        alert("금액을 입력하시요")
    
      }else{
       
        const password = prompt("비밀번호를 입력하시요");
       
        if(password != pw){
        
          alert("비밀번호 불일치");
            amount.value='';
      
          }else{
            
            const money = Number(amount.value);
            if(balance < money){
               alert("잔액이 부족합니다.");
               output.innerText = balance;
               amount.value='';
              }  
       
              else{
          
               
   
              }balance -= money;
                  output.innerText = balance;
                  amount.value='';
                  alert(`${money}원이 출금되었습니다. 남은잔액 ${balance}`);
                        }
                   //템플릿 리터럴
                   // 백틱('')을 사용하여 문자열을 감싸고,
                   //${} 안에 변수를 넣어 동적으로 문자열을 생성하는방식
                      
                     
                        
              }
                  }
