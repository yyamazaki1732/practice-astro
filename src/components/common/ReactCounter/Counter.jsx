import { useEffect, useState } from "react";


 const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // ===============================================
  // # 01
  // ===============================================
  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };

  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };

  // ===============================================
  // # 02
  // ===============================================
  const count2Up = () => {
    setCount2((prevState) => prevState + 1);
  };

  const count2Down = () => {
    setCount2((prevState) => prevState - 1);
  };

  // ===============================================
  // # count01のレンダリングのみ動かす
  // ===============================================
  useEffect(() => {
    console.log("Current count is....", count);
  }, [count]);

  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-gap-x-8 tw-p-14">
      <p className="c-test">カウント：{count}</p>
      <div className="tw-items-center tw-inline-flex tw-gap-x-3 tw-p-2.5 tw-bg-amber-600 tw-w-auto inline-block">
        <button onClick={countUp}>up</button>
        <button onClick={countDown}>down</button>
      </div>
      <p>カウント2：{count2}</p>
      <div className="tw-items-center tw-inline-flex tw-gap-x-3 tw-p-2.5 tw-bg-amber-600 tw-w-auto inline-block">
        <button onClick={count2Up}>up</button>
        <button onClick={count2Down}>down</button>
      </div>
    </div>
  );
};
export default Counter;