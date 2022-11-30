import { useState, useEffect } from "react";
import TestDanger from "./TestDanger";
import TestNormal from "./TestNormal";
import "./Test.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const users = [
    {
      id: 1,
      name: "username",
      state: "normal",
    },
    {
      id: 2,
      name: "username2",
      state: "normal",
    },
    {
      id: 3,
      name: "username3",
      state: "normal",
    },
    {
      id: 4,
      name: "노멀이",
      state: "normal",
    },
    {
      id: 5,
      name: "보통이",
      state: "normal",
    },
    {
      id: 6,
      name: "댄저",
      state: "danger",
    },
  ];

  const [allUsers, setAllUsers] = useState([]);

  const getUsers = () => {
    setAllUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const changeState = (id, state) => {
    id = Number(id);
    const target = users.find((target) => target.id === id);
    target.state = state;
    setAllUsers(users);
    console.log(users);
  };

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <div style={{ border: "1px solid green" }}>
            <TestNormal allUsers={allUsers} changeState={changeState} />
          </div>
          <div style={{ border: "1px solid red" }}>
            <TestDanger allUsers={allUsers} changeState={changeState} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
