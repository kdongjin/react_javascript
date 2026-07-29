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

// async (비동기식) 함수가 비동기식 함수로 처리 ,
// 리턴값을 promise 준다.

async function getData(flag) {
  if (flag === true) {
    return {
      name: "zeus",
      age: 30,
    };
  } else {
    return new Error("객체가 없습니다.");
  }
}

/*
getData(false)
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
*/
//console.log("클라이언트 화면입니다.");

async function printData() {
  const result = await getData(false);
  console.log(result);
}

printData();
