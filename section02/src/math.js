//math 모듈생성에서 두개의 멤버함수 생성
export function add(a, b) {
  return a + b + 10;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}
//외부에 add, sub 함수를 외부에 전송한다.
//export { add, sub };
