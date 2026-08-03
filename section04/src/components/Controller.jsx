const Controller = ({ onClickBtn }) => {
  return (
    <>
      <div>
        <button onClick={(e) => onClickBtn(-1)}>-1</button>
        <button onClick={(e) => onClickBtn(-10)}>-10</button>
        <button onClick={(e) => onClickBtn(-100)}>-100</button>
        <button onClick={(e) => onClickBtn(100)}>+100</button>
        <button onClick={(e) => onClickBtn(10)}>+10</button>
        <button onClick={(e) => onClickBtn(1)}>+1</button>
      </div>
    </>
  );
};

export default Controller;
