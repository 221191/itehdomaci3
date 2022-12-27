import React from "react";
import "./Button.css";
const Button = (props) => {
  const onClick = () => {};
  return (
    <button onClick={props.onClick} style={{ backgroundColor: props.color }}>
      {props.text}
    </button>
  );
};

export default Button;
