/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';
const CartItems = () => {
	const cartList = useSelector((state) => state.cart.itemList);
	const total = useSelector((state) => state.cart.totalQuantity);
	return (
		<div className="cart-container">
			{total === 0 ? <h2>Your Cart Is Empty</h2> : <h2>Your Cart</h2>}
			<ul>
				{cartList &&
					cartList.map((item, idx) => {
						return (
							<li key={idx}>
								<CartItem
									id={item.id}
									price={item.price}
									name={item.name}
									quantity={item.quantity}
									total={item.totalPrice}
								/>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default CartItems;
