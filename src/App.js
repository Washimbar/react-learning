import "./App.css";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Form from "./components/form/Form";

function App() {
	const name = "Click Me";
	const person = {
		name: "John",
		age: 23,
	};
	const allPerson = [
		{
			name: "John",
			age: 23,
		},
		{
			name: "Mike",
			age: 30,
		},
	];
	return (
		<div className="App">
			<Button name="Click Me" />
			<Button name={8282882} />
			<Button name={name} />
			<Form person={person} />
			<Card allPerson={allPerson} />
		</div>
	);
}

export default App;
