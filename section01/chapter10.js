// 1. 상수 객체 
const animal = { 
type: "고양이", 
name: "나비", 
color: "black", 
//메서드 선언
func1(){
  console.log( `${this.type}`)
},
//익명함수
func2 : function(){
  console.log( `${this.type}`)
},
//화살표함수 (주의: 화살표함수안에서 사용되는 this => window객체를 가르킨다.)
func3 : ()=>console.log( `${animal.name}`),

}; 

//animal = { type: "나비" } 상수변수 다른번지수정안됨.

//animal 객체에 있는 프러퍼티 수정, 삽입, 삭제 변경 모두가능
animal.age = 5
animal.name="나비2"
animal.color=123456
delete animal["age"]
console.log(animal)
console.log(typeof animal.color)

animal.func1()
animal.func2()
animal.func3()

//괄호표기법으로 함수호출
animal["func1"]()
animal["func2"]()
animal["func3"]()


