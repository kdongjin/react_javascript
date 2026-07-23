// 1. 변수 
let no = 27; 
let age; 
age = 30; 
//let age = 40;  //(x) 
//console.log(age)

// 2. 상수  
const birth = "1997.01.07"; 
//const birth2;    //상수는 반드시 초기화를 해야 된다. 
                  //상수를 초기화하지 않으면 undefined 설정되지 않는다.
//birth=”123”;   //(x)
//console.log(birth2);  //undefined 설정되지 않음. 

// 3. 변수 명명규칙(네이밍 규칙) 
// 3-1. $, _ 제외한 특수기호는 사용할 수 없다. 
let $_name;  console.log($_name); 
//let ^age = 25;  console.log(^age);  //에러가 발생함 
//let +age = 25;  console.log(+age);  //에러가 발생함 
let _age = 30;  console.log(_age); 
let $age = 30;  console.log($age); 

// 3-2. 숫자로 시작할 수 없다. 
let name1; 
let $2name;
//let 2name;

// 3-3. 예약어를 사용할 수 없다. 
//let if; //(x)

// 4. 변수 명명 가이드 (가동성있게 작성한다.)
let a = 1;    
let b = 2; 
let salesCount = 1; 
let refundCount = 1; 
let totalSalesCount = salesCount - refundCount;


