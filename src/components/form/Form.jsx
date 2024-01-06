import React from "react";
import Button from "../button/Button";

const Form = ({ person }) => {
	return (
		<form style={{ display: "flex", flexDirection: "column", width: "200px" }}>
			<input type="text" value={person.name} />
			<input type="text" value={person.age} />
			<Button name={"Submit"} />
		</form>
	);
};

export default Form;
