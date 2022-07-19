/** @format */

import { useSelector } from 'react-redux';
import './App.css';

function App() {
	const counter = useSelector((state) => state.counter);
	return (
		<div className="App">
			<h1>Counter App</h1>
			<h2>{counter}</h2>
			https://youtu.be/zrs7u6bdbUw?list=PLyDE36G6PL48BO1vQoJGbpyWiGCtU0iNY&t=445
		</div>
	);
}

export default App;
