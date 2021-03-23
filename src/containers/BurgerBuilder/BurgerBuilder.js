import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import env from "../../environment.json";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {};
env.INGREDIENTS.map(
  (ingredient) => (INGREDIENT_PRICES[ingredient.type] = ingredient.price)
);

class BurgerBuilder extends Component {
  state = {
    ingredients: [],
    total: env.BASE_PRICE.toFixed(2),
    purchasable: false,
    purchasing: false,
    limitReached: false,
  };

  addIngredientHandler = (type) => {
    const existingIngredients = [...this.state.ingredients];
    existingIngredients.unshift(type);
    this.setState({
      total: this.calculateTotalPrice(existingIngredients),
      ingredients: existingIngredients,
    });
    this.updatePurchaseState(existingIngredients);
  };

  removeIngredientHandler = (index) => {
    const existingIngredients = [...this.state.ingredients];
    existingIngredients.splice(index, 1);
    this.setState({
      total: this.calculateTotalPrice(existingIngredients),
      ingredients: existingIngredients,
    });
    this.updatePurchaseState(existingIngredients);
  };

  calculateTotalPrice = (ingredients) => {
    let ingredientsPrice = env.BASE_PRICE;
    ingredients.map((ingredient) => {
      return (ingredientsPrice += INGREDIENT_PRICES[ingredient]);
    });
    return ingredientsPrice.toFixed(2);
  };

  updatePurchaseState = (ingredients) => {
    this.limitReachedHandler(ingredients);
    this.setState({
      purchasable:
        ingredients.length >= 3 && ingredients.length <= env.MAX_INGREDIENTS,
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("Add order details!");
  };

  limitReachedHandler = (ingredients) => {
    this.setState({
      limitReached: !(ingredients.length <= env.MAX_INGREDIENTS),
    });
  };

  orderIngredientsHandler = (newOrder) => {
    this.setState({
      ingredients: newOrder,
    });
  };

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            continueOrder={this.purchaseContinueHandler}
            cancelOrder={this.purchaseCancelHandler}
            price={this.state.total}
          />
        </Modal>
        <div className="row">
          <div className="col-md-6 col-12">
            <BuildControls
              purchasable={this.state.purchasable}
              limitReached={this.state.limitReached}
              ordered={this.purchaseHandler}
              price={this.state.total}
              addIngredient={this.addIngredientHandler}
            />
          </div>
          <div className="col-md-6 col-12">
            <Burger
              removeIngredient={this.removeIngredientHandler}
              ingredients={this.state.ingredients}
              orderIngredients={this.orderIngredientsHandler}
            />
          </div>
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
