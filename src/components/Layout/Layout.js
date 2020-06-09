import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};
	sideDrawerToggleHandler = () => {
		this.setState(previusState => {
			return { showSideDrawer: !previusState.showSideDrawer };
		});
	};
	render() {
		return (
			<Auxiliary>
				<Toolbar clicked={this.sideDrawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				<main className={classes.Content}>{this.props.children}</main>
			</Auxiliary>
		);
	}
}
export default Layout;
