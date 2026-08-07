import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "./../components/Header";
import Button from "./../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  return (
    <div>
      <Header
        leftChild={<Button text={"<뒤로가기"} onClick={() => nav(-1)} />}
        title={"새 일기 쓰기"}
      />
      <Editor onCreate={onCreate} />
    </div>
  );
};

export default New;
