import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const buildControls = props => (
	<div className={classes.BuildControls}>
		<h3>
			<strong>Current Price: ₹ {props.price} </strong>
		</h3>
		{controls.map(ctrl => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				addIngredient={() => props.addIngredient(ctrl.type)}
				removeIngredient={() => props.removeIngredient(ctrl.type)}
				disabled={props.disabled[ctrl.type]}
			/>
		))}
		<button
			disabled={!props.purchasable}
			className={classes.OrderButton}
			onClick={props.order}
		>
			ORDER NOW
		</button>
	</div>
);
export default buildControls;
