import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(
		(igKey, index) => (
			<p key={index}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
				{props.ingredients[igKey]}
			</p>
		)
	);
	return (
		<Auxiliary>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Total Price: ₹ {props.price}</strong>
			</p>
			<p>Continue to checkout? </p>
			<Button btnType='Danger' clicked={props.purhaseCancleHandler}>
				CANCEL
			</Button>
			<Button btnType='Success' clicked={props.purchaseContinueHandler}>
				CONTUNUE
			</Button>
		</Auxiliary>
	);
};

export default orderSummary;
