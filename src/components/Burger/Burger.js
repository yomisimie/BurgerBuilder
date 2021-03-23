import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import env from "../../environment.json";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  opacity: isDragging ? 0.1 : 1,
  padding: 2,
  ...draggableStyle,
});

const Burger = (props) => {
  const ingredientList = {};
  env.INGREDIENTS.map((ingredient) => {
    ingredientList[ingredient.type] = ingredient.label;
    return false;
  });

  let ingredients;
  if (props.ingredients.length > env.MAX_INGREDIENTS) {
    ingredients = (
      <p>You can add a maximum of {env.MAX_INGREDIENTS} ingredients</p>
    );
  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      props.ingredients,
      result.source.index,
      result.destination.index
    );

    props.orderIngredients(items);
  };

  ingredients = [
    ingredients,
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {props.ingredients.map((ingredient, index) => (
              <Draggable
                key={ingredient + "-" + index}
                draggableId={ingredient + "-" + index}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                    className={
                      "ingredient" + (snapshot.isDragging ? " moving" : "")
                    }
                  >
                    <Ingredient
                      key={index}
                      type={ingredient}
                      className="text-right"
                    />
                    <span title={"Remove " + ingredientList[ingredient]}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#dc3545"
                        viewBox="0 0 16 16"
                        className="remove bi bi-backspace-fill"
                        onClick={() => props.removeIngredient(index)}
                      >
                        <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
                      </svg>
                    </span>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>,
  ];
  if (props.ingredients.length <= 0) {
    ingredients = <p>Please add at least 3 ingredients</p>;
  }
  return (
    <div className="Burger">
      <Ingredient type="topBun" />
      {ingredients}
      <Ingredient type="buttonBun" />
    </div>
  );
};

export default Burger;
