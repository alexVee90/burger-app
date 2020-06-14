import React from 'react';

import './Burger.style.scss';

import Ingredient from '../Ingredient/Ingredient.component';

const Burger = props => (
  <div className="Burger">
    <div className="bun top-bun"></div>
      {props.ingredients.map(ing => <Ingredient key={ing} type={ing} /> )}
    <div className="bun bottom-bun"></div>
  </div>
)

export default Burger;