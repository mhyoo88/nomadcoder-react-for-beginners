import { useState } from "react";
import PropTypes from "prop-types";

function TestComponent({
  normalUser,
  dangerUser,
  id,
  state,
  name,
  changeState,
}) {
  //이 property들은 movie 가 App.js(부모 컴포넌트)로부터 받을 예정인 정보들 - 참고 컬리브레이스는 구조분행할당

  // console.log(user);

  const changeToNormal = (e) => {
    console.log(state);
    changeState(e.target.id, "normal");
  };

  const changeToDanger = (e) => {
    changeState(e.target.id, "danger");
  };

  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{state}</li>
      </ul>
      <button id={id} state={state} onClick={(e) => changeToNormal(e)}>
        normal 되는 버튼
      </button>
      <button id={id} state={state} onClick={(e) => changeToDanger(e)}>
        danger 되는 버튼
      </button>
    </div>
  );
}

TestComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default TestComponent;
