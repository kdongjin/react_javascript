import { useParams } from "react-router-dom";
import Button from "./../components/Button";
import Header from "./../components/Header";
import Viewer from "../components/Viewer";
import { DiaryStateContext } from "./../App";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);

  //데이터를 찾는기능 useEffect 사용한다.(마운트, 언마운트, 업데이트)
  const currentDiaryItem = data.find(
    (item) => String(item.id) === String(params.id),
  );

  console.log(currentDiaryItem);

  //해당되는 id가 없다면
  useEffect(() => {
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
      return;
    }
  }, []);

  return (
    <div>
      <Header
        title={getStringedDate(new Date(currentDiaryItem.createdDate))}
        leftChild={
          <Button
            text={"< 뒤로가기"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
        rightChild={
          <Button
            text={"수정하기"}
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
          />
        }
      />
      <Viewer {...currentDiaryItem} />
    </div>
  );
};

//날짜를 문자열로 변환해주는 함수
function getStringedDate(targetDate) {
  if (!targetDate) return "";
  //yy-mm-dd
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
}

export default Diary;
