//1. Date 객체를 생성
let date1 = new Date();
console.log(date1);

//2. Date 객체 생성(월 : 0, ~~)
let date2 = new Date(2026, 7 - 1, 24, 16, 1, 1);
console.log(date2);

//3. 타임스탬프( 1970,1,1,0,0,0 ~ 현재까지 ms 리턴함 ) (1초 = 1000)
let date3 = new Date();
const timeStamp = date3.getTime();
console.log(timeStamp); //1970,1,1,0,0,0=>0 1970,1,1,0,0,1 =>1000 ~현재

// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(2 + 1);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
console.log(date1);

//5. 시간요소들을 추출하는방법
let day = date1.getDay();
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
console.log(year, month, date, hour, minute, seconds);
console.log(`day = ${day}`);

// 5. 시간을 여러 포맷으로 출력하기
//시간은 제외하고 날짜만 출력하기
console.log(date1.toDateString());
//현지화된 문자에 맞게 출력하기
console.log(date1.toLocaleString());
