import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
	let updatedClass = [classes.Modal, classes.Out];
	if (props.show) {
		updatedClass = [classes.Modal, classes.In];
	}
	return (
		<Auxiliary>
			<Backdrop show={props.show} clicked={props.clicked} />
			<div className={updatedClass.join(' ')}>{props.children}</div>
		</Auxiliary>
	);
};

export default modal;
