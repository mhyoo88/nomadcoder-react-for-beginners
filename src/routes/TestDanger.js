import { useEffect, useState } from "react";
import TestComponent from "../component/TestComponent";

function TestDanger({ allUsers, changeState }) {
  const [dangerUsers, setDangerUsers] = useState([]);
  const getDangerUsers = () => {
    const dangerUser = allUsers.filter((user) => user.state === "danger");
    setDangerUsers(dangerUser);
  };

  useEffect(() => {
    getDangerUsers();
  }, []);

  return (
    <>
      {dangerUsers.map((user, index) => (
        <TestComponent
          key={index}
          id={user.id}
          dangerUser={user}
          name={user.name}
          state={user.state}
          changeState={changeState}
        />
      ))}
    </>
  );
}

export default TestDanger;
