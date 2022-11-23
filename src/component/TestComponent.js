import PropTypes from "prop-types";

function TestComponent({ id, name, state }) {
  //이 property들은 movie 가 App.js(부모 컴포넌트)로부터 받을 예정인 정보들 - 참고 컬리브레이스는 구조분행할당
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{state}</li>
      </ul>
    </div>
  );
}

TestComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default TestComponent;
