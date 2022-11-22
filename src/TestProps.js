import PropTypes from "prop-types";

function TestProps({ text, fontSize }) {
  // -> shortcut : (props)
  // console.log(props) //첫번째 인자는 컴포넌트 속성의 첫번째 값을 가져온다.
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize: fontSize,
        // fontSize: fontSize ? 18 : 16,
      }}
    >
      {text}
      {/* -> shortcut : {props.banana} */}
    </button>
  );
}

TestProps.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number.isRequired,
};

export default TestProps;
