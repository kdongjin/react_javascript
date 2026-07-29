//음식주문
function orderFood(food, flag) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행함수
    console.log(`${food} 음식주문`);
    setTimeout(() => {
      flag === true
        ? resolve(`${food} 음식이 완료했습니다.`)
        : reject(`${food} 음식이 실패했습니다.`);
    }, 2000);
  });

  return promise;
}

function coolFood(food, flag) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행함수
    console.log(`${food} 차갑게 음식주문`);
    setTimeout(() => {
      flag === true
        ? resolve(`${food}이 차갑게 완료했습니다.`)
        : reject(`${food}이 차갑게 처리하는게 실패했습니다.`);
    }, 2000);
  });

  return promise;
}

function freezeFood(food, flag) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행함수
    console.log(`${food} 냉동 음식주문`);
    setTimeout(() => {
      flag === true
        ? resolve(`${food}이 냉동이 완료했습니다.`)
        : reject(`${food}이 냉동을 처리하는게 실패했습니다.`);
    }, 2000);
  });

  return promise;
}
//const promise = orderFood("백숙", false);

orderFood("백숙", true)
  .then((result) => {
    console.log(result);
    return coolFood("백숙", true);
  })
  .then((result) => {
    console.log(result);
    return freezeFood("백숙", true);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
const arr = [10, 20, 30, 40, 50];

arr.forEach((e) => {
  console.log(`사용자 화면 ${e}`);
});
