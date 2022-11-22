import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; //toDo가 비워있다면 그냥 끝내기
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    //-> 마치 setTodos(function (currentArray) {return [toDo, ...currentArray];}); 와 같다. ...을 앞에 붙히면 해당 array 앞에 데이터를 붙혀주는 역할을 한다.
    setTodo(""); //submit 후 다시 빈값으로 toDo = "" <- 처럼 직업 state에 적용하지않고 함수를 이용하여 초기화 한다.
  };
  // console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          placeholder="type what to do"
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
