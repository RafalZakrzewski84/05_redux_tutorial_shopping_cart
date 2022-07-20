/** @format */

import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';
import './App.css';

import Auth from './Components/Auth';

function App() {
	//initial state of auth.isLoggedIn from store from authSlice - will be false
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	return (
		<div className="App">
			https://youtu.be/zrs7u6bdbUw?t=2103
			<Auth />
		</div>
	);
}

export default App;
