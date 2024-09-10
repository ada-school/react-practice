import { useState } from "react";
import "./App.css";

function App() {
	const [numbers, setNumbers] = useState([10, 20, 5, 30, 50, 15]);
	const [count, setCount] = useState(0);

	const maxNumber = () => {
		console.log("Calculando el número máximo...");
		return Math.max(...numbers);
	};

	const addRandomNumber = () => {
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		setNumbers((prevNumbers) => [...prevNumbers, randomNumber]);
	};

	return (
		<div>
			<button onClick={() => setCount((prev) => prev + 1)}>
				contador en: {count}
			</button>
			<hr />
			<p>Lista de números: {numbers.join(", ")}</p>
			<p>Número máximo: {maxNumber()}</p>
			<button onClick={addRandomNumber}>Agregar número aleatorio</button>
		</div>
	);
}

export default App;
