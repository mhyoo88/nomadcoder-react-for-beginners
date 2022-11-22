import { useState, useEffect } from "react";

// #첫번쨰
// function Hello() {
//   useEffect(() => {
//     console.log("created :)"); //처음 한번만 실행 하지만 아래 ui 처럼 클릭 할때마다 실행 create, destroy 될때마다
//     return () => console.log("destroyed :("); //cleanup function - 컴포넌트가 destroyed 될때, maybe 컴포넌트가 사라질때 analysis 결과를 보내거나 분석 API 를 보내겟지 evnent listner 를 하거나
//   }, []);
//   return <h1>Hello</h1>;
// }

// # 두번쨰
// function Hello() {
//   function byeFn() {
//     // 6. component가 destroyed 될 때는 react.js는 hiFn이 return 한 function을 실행 시킨다.
//     console.log("bye :<");
//   }

//   function hiFn() {
//     // 3. hiFn 실행
//     console.log("hi :)"); // 4. hi가 콘솔에 찍히고
//     return byeFn; // 5. byeFn함수가 리턴 되고
//   }

//   useEffect(hiFn, []); // 2. hiFn을 발생 시키고 []값이 비워있기 때문에 Hello 컴포넌트는 호출 될때 한번만 실행된다.
//   return <h1>Hello</h1>;
// }

// # 세번쨰
function Hello() {
  useEffect(() => {
    console.log("Hi:)");
    return () => console.log("bye :(");
  }, []);
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };

  return (
    <div>
      {/* 1.이벤트 클릭 후 showing 이 true 가 되면 Hello가(ui, 함수) 실행 된다. */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
