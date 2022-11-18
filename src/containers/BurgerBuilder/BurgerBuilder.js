import React, { useState } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import env from "../../environment.json";

const INGREDIENT_PRICES = {};
env.INGREDIENTS.map(
  (ingredient) => (INGREDIENT_PRICES[ingredient.type] = ingredient.price)
);

const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [total, setTotal] = useState(env.BASE_PRICE.toFixed(2));
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [limitReached, setLimitReached] = useState(false);

  const addIngredientHandler = (type) => {
    const existingIngredients = [...ingredients];
    existingIngredients.unshift(type);
    setTotal(calculateTotalPrice(existingIngredients));
    setIngredients(existingIngredients);
    updatePurchaseState(existingIngredients);
  };

  const removeIngredientHandler = (index) => {
    const existingIngredients = [...ingredients];
    existingIngredients.splice(index, 1);
    setTotal(calculateTotalPrice(existingIngredients));
    setIngredients(existingIngredients);
    updatePurchaseState(existingIngredients);
  };

  const calculateTotalPrice = (ingredients) => {
    let ingredientsPrice = env.BASE_PRICE;
    ingredients.map((ingredient) => {
      return (ingredientsPrice += INGREDIENT_PRICES[ingredient]);
    });
    return ingredientsPrice.toFixed(2);
  };

  const updatePurchaseState = (ingredients) => {
    limitReachedHandler(ingredients);
    setPurchasable(
      ingredients.length >= 3 && ingredients.length <= env.MAX_INGREDIENTS
    );
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    alert("Add order details!");
  };

  const limitReachedHandler = (ingredients) => {
    setLimitReached(!(ingredients.length <= env.MAX_INGREDIENTS));
  };

  const orderIngredientsHandler = (newOrder) => {
    setIngredients(newOrder);
  };

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          continueOrder={purchaseContinueHandler}
          cancelOrder={purchaseCancelHandler}
          price={total}
        />
      </Modal>
      <div className="row">
        <div className="col-md-6 col-12">
          <BuildControls
            purchasable={purchasable}
            limitReached={limitReached}
            ordered={purchaseHandler}
            price={total}
            addIngredient={addIngredientHandler}
          />
        </div>
        <div className="col-md-6 col-12">
          <Burger
            removeIngredient={removeIngredientHandler}
            ingredients={ingredients}
            orderIngredients={orderIngredientsHandler}
          />
        </div>
      </div>
    </>
  );
};

export default BurgerBuilder;
