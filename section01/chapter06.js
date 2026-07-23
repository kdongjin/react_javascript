//함수호이스팅기능
//함수호이스팅 함수선언문에만 작동이 된다.
//함수호이스팅 함수표현식(익명함수, 화살표함수) 작동안된다.

let helloC = ()=> "함수표현식에 화살표함수입니다"

//console.log(helloA())  //에러
console.log(helloB())
console.log(helloC())

let helloA = function (){
  return "함수표현식에 익명함수입니다"
}



//함수선언문 호이스팅이 발생이 된다. 
function helloB(){  
  return "함수선언문 함수입니다"
}