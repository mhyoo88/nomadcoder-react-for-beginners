import React, { useState, useEffect, useRef } from "react";

function UseRef() {
  // const [count, setCount] = useState(0);
  // console.log(`랜더링... count: ${count}`);

  // useEffect(() => {
  //   const intervalId = setInterval(() => setCount((count) => count + 1), 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  // return <p>자동 카운트: {count}</p>; - 시작 과 정지 버튼을 만들고 싶다면 ? 아래

  // const [count, setCount] = useState(0);

  // let intervalId;

  // const startCounter = () => {
  //   //매번 새로운 값 할당
  //   intervalId = setInterval(() => setCount((count) => count + 1), 1000);
  // };

  // const stopCounter = () => {
  //   clearInterval(intervalId);
  // };

  // return (
  //   <>
  //     <p>자동 카운트: {count}</p>
  //     <button onClick={startCounter}>시작</button>
  //     <button onClick={stopCounter}>정지</button>
  //   </>
  // ); -> 문제점 : 안에서 선언된 intervalId 변수를 startCounter() 함수와 stopCounter() 함수가 공유할 수 있도록 해줘야 한다는 것입니다. 그럴려면 intervalId 변수를 두 함수 밖에서 선언해야하는데 그럴 경우, count 상태값이 바뀔 때 마다 컴포넌트 함수가 호출되어 intervalId도 매번 새로운 값으로 바뀔 것입니다. 따라서, 브라우저 메모리에는 미처 정리되지 못한 intervalId 들이 1초에 하나식 쌓여나갈 것입니다.

  // useRef 사용
  //useRef 함수는 current 속성을 가지고 있는 객체를 반환하는데, 인자로 넘어온 초기값을 current 속성에 할당합니다. 이 current 속성은 값을 변경해도 상태를 변경할 때 처럼 React 컴포넌트가 다시 랜더링되지 않습니다. React 컴포넌트가 다시 랜더링될 때도 마찬가지로 이 current 속성의 값이 유실되지 않습니다.useRef 훅 함수가 반환하는 객체의 이러한 독특한 성질을 이용하여 startCounter()와 stopCounter() 함수를 구현해보았습니다.

  const [count, setCount] = useState(0);
  const intervalId = useRef(null);
  console.log(`렌더링...count : ${count}`);

  const startCounter = () => {
    intervalId.current = setInterval(
      () => setCount((count) => count + 1),
      1000
    );
    console.log(`시작... intervalId: ${intervalId.current}`);
  };

  const stopCounter = () => {
    clearInterval(intervalId.current);
    console.log(`정지... intervalId: ${intervalId.current}`);
  };

  return (
    <>
      <p>자동 카운트: {count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
}

export default UseRef;
