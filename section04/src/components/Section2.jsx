import "../css/Section.css";

const Section2 = () => {
  const user = {
    name: "zeus",
    isLogin: false,
  };

  return (
    <>
      {user.isLogin === true ? (
        <div className="logstyle">{user.name}로그아웃2</div>
      ) : (
        <div className="logstyle">{user.name}로그인2</div>
      )}
    </>
  );
};

export default Section2;
