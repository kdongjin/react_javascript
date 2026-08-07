import "./../css/Editor.css";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "보통" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "완전 나쁨" },
];

const Editor = ({ onCreate }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  //초기값으로 5번이 선택된것을 추천
  const emotionId = 1;

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    //날짜를 수정하면 new Date(날짜)
    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({ ...input, [name]: value });
  };

  const onClickSubmit = () => {
    //목업 데이타에 새로운객체 insert
    onCreate(input.createdDate, input.emotionId, input.content);
    //뒤로가기 방지하면서 / 페이지 이동
    nav("/", { replace: true });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          name="content"
          value={input.content}
          onChange={onChangeInput}
        />
      </section>
      <section className="button_section">
        <Button
          text={"취소하기"}
          onClick={() => {
            nav(-1);
          }}
        />
        <Button text={"작성완료"} type={"POSITIVE"} onClick={onClickSubmit} />
      </section>
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

export default Editor;
