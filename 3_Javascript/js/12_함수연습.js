function fn1 (name){
  
  console.log(`1번 Hello,${name}!`);
}
fn1("영민");

function ans2 (a,b){
  return console.log(a+b);
  
}
ans2(1,2);

const ans3 =(a,b) =>  a*b; 

console.log(`3번은${ans3(3,5)}입니다`);
  


function ans4(a,b){
  if(a>b)console.log("첫번쨰숫자가더큽니다");
  else console.log("두번째숫자가큽니다")
}
ans4(1,2);

function ans5(str){
  console.log(`문자열의길이는 ${str.length}입니다`)
}

ans5("아에이오우");

function ans6(str , num){

  for (i = 0; i< num; i++){

    console.log(`문자열길이는 ${str.length}이고 반복횟수는${num}입니다`)
  }
  
}
ans6("오케이예",5);  

function ans7(num) {
  return num % 2 === 0;} 
  console.log(ans7(4));    
  console.log(ans7(7));

 



function ans8(num1, num2, num3){

  if (num1 > num2 || num1 > num2){
    console.log(`${num1}가 가장큰수입니다`);
  }else if(num2> num1 || num2 > num3){
    console.log(`${num2}가 가장큰수입니다`);
  }else{
    console.log(`${num3}이 가장큰수입니다`);
  }
  //내장함수 Math.max() : 전달받은값중 가장큰수반환.
  // return Math.max(num1,num2,num3);



}
ans8(1,5,4);

const ans9 =(arr) => {
  return arr[0]

}
console.log(ans9([1,2,3]));

const ans10 = (arr) =>{
  let count =0 ;
  let avg ;
 /*
  let sum = arr.reduce((acc,curr)=>{ retrun acc+curr});
  배열.reduce(callback함수) : JS 배열의 메서드로 (함수), 
  배열의 모든 요소를 순회하면서
  하나의 결과값을 누적하여 반환
  acc(accumulator) : 이전 콜백호출에서반환된 값(누산기 - 결과를 누적)
  curr(currentvalue): 현재값 -> 현재 처리중인 배열 요소값 
 */
  for(i =0; i< arr.length; i++){
    count += arr[i];

  }
  avg = count / arr.length;  
  
  return {"합계":count, "평균":avg}
  
}

console.log(ans10([1,2,3,4,5]));

const ans11 = (x,num1,num2) => {
  switch(x){
    case `+` :
      return console.log(num1+ num2) 
    case `-` :
      return console.log(num1 - num2)
      
    case `*` :
      return console.log(num1 * num2) 
    case `/` :
      return console.log(num1 / num2)
  }
}
ans11(`-`,10,11);
ans11(`+`,1,5);

/*function hellow(name){

  console.log(`${name}님 안녕하세요`);

}

function ans12(name){
  
  return hellow(name);
}
ans12("김영민");*/

function greet(name, callback){
  callback(name);
  
}

function sayHello(name){
  console.log(`12번 :hello, ${name}`);
}
function saygoodbye(name){
  console.log(`12번 : bye, ${name}`);
}

greet("길동이",sayHello);
greet("영희",saygoodbye);


