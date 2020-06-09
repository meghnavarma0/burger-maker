import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
	return (
		<Auxiliary>
			<Backdrop show={true} clicked={props.clicked} />
			<div className={classes.Modal}>{props.children}</div>
		</Auxiliary>
	);
};

export default modal;
