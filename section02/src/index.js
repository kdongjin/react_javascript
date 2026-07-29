//require 외부에 있는 모듈을 가져온다.
import randomColor from "randomcolor";
import multiply, { add, sub } from "./math.js";

//모듈에 있는 함수를 사용한다.
let value11 = add(1, 2);
let value12 = add(1, 2);
let value13 = add(1, 2);
let value14 = add(1, 2);
let value2 = sub(1, 2);
let value3 = multiply(1, 2);
//randomcolor에 있는 함수를 사용해서 랜담값을 구한다.
const colorValue = randomColor();
console.log(value);
console.log(value2);
console.log(value3);
console.log(`randomColor() = ${colorValue}`);
