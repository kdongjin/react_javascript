import Header from "./../components/Header";
import Button from "./../components/Button";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";
import { useContext, useState } from "react";

const Home = () => {
  const data = useContext(DiaryStateContext);
  // 현재 Header 26년 8월 되어있는것으로 필터링해서 DiaryList 넘겨줘야된다.
  //1. 현재날짜를 상태값으로 관리
  const [pivotDate, setPivotDate] = useState(new Date());

  //현재달에 내용만 필터링처리함수
  const monthlyData = getMonthlyData(pivotDate, data);
  //현재달 + 1
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  console.lo;
  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={`${pivotDate.getFullYear()}년  ${pivotDate.getMonth() + 1}월`}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

function getMonthlyData(pivotDate, data) {
  //이번달 시작되는 시점과 끝나는 시점사이에 들어오는것만 필터링
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();
  const monthlyData = data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime,
  );
  return monthlyData;
}

export default Home;
