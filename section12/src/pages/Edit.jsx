import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Updator from "../components/updator";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";
import { useContext, useEffect, useState } from "react";

const Edit = () => {
  //const [currentDiary, setCurrentDiary] = useState();
  // /edit/3
  const params = useParams();
  const nav = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  //전체목업데이터 로드
  const data = useContext(DiaryStateContext);

  //데이터를 찾는기능 useEffect 사용한다.(마운트, 언마운트, 업데이트)
  const currentDiaryItem = data.find(
    (item) => String(item.id) === String(params.id),
  );

  //해당되는 id가 없다면
  useEffect(() => {
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
      return;
    }
  }, []);

  //삭제처리 요청
  const onClickDelete = () => {
    if (window.confirm("일기를 삭제할까요? 다시복구 되지 않습니다!")) {
      onDelete(params.id);
      nav("/", { replace: true });
      return;
    }
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"<뒤로가기"} onClick={() => nav(-1)} />}
        title={"일기수정하기"}
        rightChild={
          <Button text={"삭제하기"} type={"NAGATIVE"} onClick={onClickDelete} />
        }
      />
      <Updator onUpdate={onUpdate} initData={currentDiaryItem} />
    </div>
  );
};

export default Edit;
