/** @format */

import { useSelector } from 'react-redux';
import './App.css';

import Auth from './Components/Auth';
import Layout from './Components/Layout';

function App() {
	//initial state of auth.isLoggedIn from store from authSlice - will be false
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const cartItems = useSelector((state) => state.cart.itemList);
	console.log(cartItems);
	return (
		<div className="App">
			{!isLoggedIn && <Auth />}
			{isLoggedIn && <Layout />}
		</div>
	);
}

export default App;
