import React from "react";
import "./button.css";

const Button = (props) => {
	return <div className="btn">{props.name}</div>;
};

export default Button;
