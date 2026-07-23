//콜백함수

//함수선언문(호이스팅)
function checkMood(mood, goodCallback, badCallback){
  if(mood === "good"){
    //sing()
    //dance()
    goodCallback()
  }else{
    //cry()
    badCallback()

  }
}

checkMood("good", ()=> console.log("노래를 부르고 춤까지 춥니다" ), 
()=> console.log("기분이 안좋아요."));

/*
//함수선언문`
function sing(){
  console.log("노래를 부릅니다." );
}

let sing = function(){
  console.log("노래를 부릅니다." );
}
let sing = ()=> console.log("노래를 부릅니다." );


function cry(){
  console.log("노래를 부르지 못하여 울고있습니다." );
}

function dance(){
  console.log("춤을 추고 있습니다." );
}
*/

//2. 콜백함수 응용방법(리액트에서 자주 사용함)
function repeat(count, callback){
  for (let index = 0; index < count; index++) {
    callback(index); 
  }
}

repeat(6, (idx)=> console.log("화이팅"+idx))

repeat(4, (idx)=> console.log("아자아자"+idx*3))