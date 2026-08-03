import { useEffect } from "react";

const Even = () => {
  //마운트, 어마운트 작동
  useEffect(() => {
    //마운트 콜
    console.log(`Even mount`);

    return () => {
      //unmount 콜
      console.log(`Even unmount`);
    };
  }, []);

  return (
    <>
      <div>
        <h1>짝수입니다.</h1>
      </div>
    </>
  );
};

export default Even;
