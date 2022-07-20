/** @format */

import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
	//function for selecting state counter in store/index.js
	const counter = useSelector((state) => state.counter);

	//function for dispatching action
	const dispatch = useDispatch();
	//action defined in store/index.js
	const add = () => {
		//used for action adding
		dispatch({ type: 'ADD' });
	};
	const remove = () => {
		//used for action removing
		dispatch({ type: 'REM' });
	};
	const addTen = () => {
		//used for action add10
		dispatch({ type: 'add10', payload: 10 });
	};

	return (
		<div className="App">
			<h1>Counter App</h1>
			<h2>{counter}</h2>
			<button onClick={add}>Add one</button>
			<button onClick={remove}>Remove one</button>
			<button onClick={addTen}>Add 10</button>
		</div>
	);
}

export default App;
