//객체를 순회해서 출력하기
const person = { 
name: "김동진", 
age: 25, 
tall: 179 
};  

console.log(person)
//객체에 키값을 배열로 가져와서 출력
let keyArray = Object.keys(person)
let valueArray = Object.values(person)
console.log(keyArray)

keyArray.forEach((e)=> console.log(`${e} : ${person[e]}`))
valueArray.forEach((e)=>console.log(`${e} ${typeof e}`))

for (const e of keyArray) {
  console.log(`${e} : ${person[e]}`)
}
console.log("-----------------")
for (const e of valueArray) {
  console.log(`${e} ${typeof e}`)
}