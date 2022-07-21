/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';
const CartItems = () => {
	const cartList = useSelector((state) => {
		state.cart.itemList;
	});
	return (
		<div className="cart-container">
			<h2>Your Cart</h2>
			<ul>
				{cartList.map((item, idx) => {
					<li key={idx}>
						<CartItem
							id={item.id}
							price={item.price}
							name={item.name}
							quantity={item.quantity}
							total={item.totalPrice}
						/>
					</li>;
				})}
			</ul>
		</div>
	);
};

export default CartItems;
