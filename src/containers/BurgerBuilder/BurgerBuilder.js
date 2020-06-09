import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENTS_PRICES = {
	meat: 30,
	cheese: 25,
	bacon: 20,
	salad: 15
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 20,
		purchasable: false,
		purchasing: false
	};

	updatePurchaseState(totalPrice) {
		this.setState({ purchasable: totalPrice > 20 });
		console.log(this.state.purchasable);
	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;

		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const oldPrice = this.state.totalPrice;
		const updatedPrice = oldPrice + INGREDIENTS_PRICES[type];

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: updatedPrice
		});
		this.updatePurchaseState(updatedPrice);
	};
	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;

		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const oldPrice = this.state.totalPrice;
		const updatedPrice = oldPrice - INGREDIENTS_PRICES[type];

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: updatedPrice
		});
		this.updatePurchaseState(updatedPrice);
	};
	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};
	purhaseCancleHandler = () => {
		this.setState({ purchasing: false });
	};
	purchaseContinueHandler = () => {
		alert('You Continue');
	};
	render() {
		const disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		const showModal = this.state.purchasing ? (
			<Modal clicked={this.purhaseCancleHandler}>
				<OrderSummary
					purhaseCancleHandler={this.purhaseCancleHandler}
					ingredients={this.state.ingredients}
					purchaseContinueHandler={this.purchaseContinueHandler}
					price={this.state.totalPrice}
				/>
			</Modal>
		) : null;
		return (
			<Auxiliary>
				{/* <Modal>
					<OrderSummary ingredients={this.state.ingredients} />
				</Modal> */}
				{showModal}
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice.toFixed(2)}
					purchasable={this.state.purchasable}
					order={this.purchaseHandler}
				/>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;
