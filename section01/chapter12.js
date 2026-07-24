//단락평가
function returnFalse(){
  console.log("false 함수")
  return false
}

function returnTrue(){
  console.log("true 함수")
  return true
}

//  false && ~~~~ : 뒤에있는 문장은 절대실행안한다.
//  true || ~~~~ : 뒤에있는 문장은 절대 실행안한다.
console.log(false && true)
console.log(returnFalse() && returnTrue())
//console.log(returnFalse() || returnTrue())


//단락평가 (자바스크립트가 무엇을 false)
//기본타입: 디폴트값이 false
// 0, 0.0, "", false, undefined, null, NaN

//단락평가 활용
//객체가 존재하면 객체멤버변수를 출력하고
//객체가 없다면 객체값이 없을 출력하는 기능적인함수
function printName(person){
  let name = person && "존재함"
  console.log( name || "객체가 존재하지 않음"); 
}

printName()
printName({name: "kdj"})
let arr = [0,0.0,false,"",null, undefined, NaN, [], {}, ()=>{}, function(){}, function aa(){}]

for (let index in arr) {
  console.log(arr[index])
  printName(arr[index])
}








