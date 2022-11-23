import { useState, useEffect } from "react";
import TestComponent from "../component/TestComponent";

function Home() {
  const [loading, setLoading] = useState(true);
  const [normalUsers, setNormalUsers] = useState([]);
  //async await (모던한 방식 - 짧은 버전)
  const users = [
    {
      id: 1,
      name: "username",
      state: "normal",
    },
    {
      id: 2,
      name: "username2",
      state: "warning",
    },
    {
      id: 3,
      name: "username3",
      state: "danger",
    },
    {
      id: 4,
      name: "노멀이",
      state: "normal",
    },
  ];

  const getUsers = () => {
    const normalUser = users.filter((user) => user.state === "normal");
    setNormalUsers(normalUser);
    setLoading(false);
  };

  console.log(normalUsers);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {normalUsers.map((user) => (
            <TestComponent //부모 컴포넌트에서 자식 컴포넌트로 정보를 전달 할때는 Prop을 사용한다.
              key={user.id}
              id={user.id}
              name={user.name}
              state={user.state}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
