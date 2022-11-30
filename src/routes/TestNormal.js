import { useEffect, useState } from "react";
import TestComponent from "../component/TestComponent";

function TestNormal({ allUsers, changeState }) {
  const [normalUsers, setNormalUsers] = useState([]);
  const getNormalUsers = () => {
    const normalUser = allUsers.filter((user) => user.state === "normal");
    setNormalUsers(normalUser);
  };

  useEffect(() => {
    getNormalUsers();
  }, []);

  return (
    <>
      {normalUsers.map((user, index) => (
        <TestComponent
          key={index}
          id={user.id}
          normalUser={user}
          name={user.name}
          state={user.state}
          changeState={changeState}
        />
      ))}
    </>
  );
}

export default TestNormal;
