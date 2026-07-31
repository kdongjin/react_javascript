const Main = () => {
  //지역변수
  let number = 9;
  let obj = { name: "zeus" };
  let array = [1, 2, 3, 5];
  let bool = false;
  let hobby = "배드민턴";
  let undefinedValue;
  return (
    <main>
      <h1>안녕 리액트. 고마워 너 때문에 즐거워.</h1>
      <h3>number = {number}</h3>
      <h3>number = {number % 2 === 0 ? "짝수" : "홀수"}</h3>
      {/* <h3>obj = {obj}</h3> */}
      <h3>obj.name = {obj.name}</h3>
      <h3>array = {array}</h3>
      <h3>array[2] = {array[2]}</h3>
      <h3>bool = {bool}</h3>
      <h3>hobby = {hobby}</h3>
      <h3>undefinedValue = {undefinedValue}</h3>
      <h3>array filter = {array.filter((e) => e >= 3)}</h3>
    </main>
  );
};

export default Main;
