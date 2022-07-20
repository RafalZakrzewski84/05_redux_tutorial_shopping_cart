/** @format */

import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';
import './App.css';

import Auth from './Components/Auth';

function App() {
	return (
		<div className="App">
			<Auth />
		</div>
	);
}

export default App;
