import React from "react";
import Button from "../button/Button";

const Form = () => {
	return (
		<form style={{ display: "flex", flexDirection: "column", width: "200px" }}>
			<input type="text" />
			<input type="text" />
			<Button />
		</form>
	);
};

export default Form;
