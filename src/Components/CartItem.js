/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import './Cart.css';
import { cartActions } from './../store/cartSlice';
const CartItem = ({ name, quantity, total, price, id }) => {
	return (
		<div className="cartItem">
			<h2> {name}</h2>
			<p>${price} /-</p>
			<p>x{quantity}</p>
			<article>Total ${total}</article>
			<button className="cart-actions">-</button>
			<button className="cart-actions">+</button>
		</div>
	);
};

export default CartItem;
