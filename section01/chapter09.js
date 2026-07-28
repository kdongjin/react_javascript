//객체생성
let obj1 = new Object(); //객체생성자
let obj2 = {}; //객체 리터널

//2. 객체  프로퍼티
let person = {
  name: "홍길동",
  age: 30,
  gender: false,
  extra: {
    ext1: 10,
    ext2: "str",
    ext3: false,
  },
  extra2: function () {
    console.log(this.age + "살");
  },
  extra4: () => {},
  extra6() {},
  extra3: [1, 2, 3, 4, 5],
  "like cat": true,
};

//객체 property 접근방법  .
console.log(person.age);
console.log(person["age"]);
console.log(person["age"]);
console.log(person.extra.ext1);
console.log(person.extra["ext1"]);
console.log(person.extra["ext1"]);

//"like cat" : true,
console.log(person["like cat"]);

// extra3 : [1,2,3,4,5]
console.log(person.extra3[0]);
console.log(person.extra3[1]);

//extra2 : function (){},
person.extra2();
//extra4 : ()=>{},
person.extra4();

//객체 property setter
person.name = "홍길동";
person["name"] = "저길동";

console.log(person);

//객체 property 삭제
delete person.age;
//delete person["age"]
console.log(person);

//객체 속에 프로퍼티가 존재하는지 체크(in)
let result1 = "name" in person;
console.log(result1);

//객체 속에 프로퍼티를 추가
person.address = "경기도 성남시";
console.log(person);
