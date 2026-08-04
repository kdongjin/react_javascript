import "../css/Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <h3>오늘의 달력📆</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>
    </div>
  );
};
//const memorizedHeader = memo(Header);

export default memo(Header);
