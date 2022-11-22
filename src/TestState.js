import { useState } from "react";

function TestState() {
  const [data, setData] = useState(0);
  const onClick = () => setData(data + 1);
  return (
    <div>
      <h3>Total clicks: {data}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default TestState;
