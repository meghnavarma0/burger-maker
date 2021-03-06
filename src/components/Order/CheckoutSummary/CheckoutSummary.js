import React from 'react';
import Burger from '../../../components/Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = props => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1>Hope Our Burger Tastes Well!</h1>
			<div style={{ width: '100%', margin: 'auto' }}>
				<Burger ingredients={props.ingredients} />
			</div>

			<Button btnType='Danger'>CANCEL</Button>
			<Button btnType='Success'>CONTINUE</Button>
		</div>
	);
};

export default checkoutSummary;
