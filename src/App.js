/** @format */

import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';
import './App.css';

import Auth from './Components/Auth';
import Layout from './Components/Layout';

function App() {
	//initial state of auth.isLoggedIn from store from authSlice - will be false
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	return (
		<div className="App">
			{!isLoggedIn && <Auth />}
			{isLoggedIn && <Layout />}
		</div>
	);
}

export default App;
