import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import OrderItem from '../components/OrderItem';
import iconArrow from '@icons/flechita.svg';
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumaTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const suma = state.cart.reduce(reducer, 0);
		return suma;
	}

// 	return (
// 		<aside className="MyOrder">
// 			<div className="title-container">
// 				<img src={iconArrow} alt="arrow" />
// 				<p className="title">My order</p>
// 			</div>
// 			<div className="my-order-content">
// 				{state.cart.map(product => (
// 					<OrderItem product={product} key={`orderItem-${product.id}`} />
// 				))}
// 				<div className="order">
// 					<p>
// 						<span>Total</span>
// 					</p>
// 					<p>${sumaTotal()}</p>
// 				</div>
// 				<button className="primary-button">
// 					Checkout
// 				</button>
// 			</div>
// 		</aside>
// 	);
// }

return (
	<aside className="MyOrder">
		<div className="title-container">
			<img src={iconArrow} alt="arrow" />
			<p className="title">My order</p>
		</div>
		<div className="my-order-content">
			{state.cart.map((product, index )=> (
				<OrderItem product={product} key={index} index={index} />
			))}
			<div className="order">
				<p>
					<span>Total</span>
				</p>
				<p>${sumaTotal()}</p>
			</div>
			<button className="primary-button">
				Checkout
			</button>
		</div>
	</aside>
);
}

export default MyOrder;