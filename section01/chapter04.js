// 1. Number Type 
let num1 = 27; 
let num2 = 4; 
let num3 = -20; 
console.log(num1 + num2);  
console.log(num1 - num2);  
console.log(num1 * num2);  
console.log(num1 / num2);  
console.log(num1 % num2);   
//나머지연산(모듈러 연산) 
let inf = Infinity; 
let mInf = -Infinity; 
let nan = NaN;
let string = "hello";
console.log(1 + string);   //1hello       
console.log(1 * string);   //NaN    
//수치연산이 실패했을 때 나타남  console.log(1 * “hello”);

// 2. String Type 
let myName = "홍길동"; 
let myLocation = "석촌"; 
let introduce = myName + myLocation;
console.log(introduce)

//3, 템플릿 리터널 문법(주의: ` 백틱에서 진행해야 한다) 
let introduceText = `${myName}은 ${myLocation}에 거주합니다`; 
console.log(introduceText);

//4. Boolean Type 
let isSwitchOn = true; 
let isEmpty = false;

//5. Null Type (아무것도 없다) 
let empty = null;
 
//6. Undefined Type 
let none; 
console.log(none);











