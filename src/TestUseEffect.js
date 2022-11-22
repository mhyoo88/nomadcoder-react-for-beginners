import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");

  const iRunOnlyOnce = () => {
    console.log("iRunOnlyOnce");
  };

  useEffect(iRunOnlyOnce, []); //empty 이미 때문에 아무것도 watching 할수 없다.

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("i run only 'keyword' change " + keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("i run only 'counter' change " + counter);
  }, [counter]);

  useEffect(() => {
    console.log("i run only 'keyword and counter' change " + counter);
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
