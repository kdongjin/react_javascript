//전역변수 , 지역변수
let a = 1; 

function funcA(){
  let b = 2; 
  console.log(a);

  //지역함수선언
  function funcB(index){
    console.log("지역함수선언"+ index)
  }
  funcB(10)
}

funcA(); 
//console.log(b); 에러발생 

//모든 블럭에 들어있는 변수선언 다 지역변수이다.
//매개변수 다 지역변수이다.

if(true){
  let c = 10; 
  console.log(c)
}
// console.log(c)  에러발생

for (let index = 0; index < 2; index++) {
  let count = 1; 
  count += index; 
}
//console.log(count);  에러발생
console.log(index)

//funcB(50)  //함수안에 선언된 지역함수는 밖에서 콜 할 수 없다. 
 