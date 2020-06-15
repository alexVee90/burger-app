import React from 'react';

import './Burger.style.scss';

import Ingredient from '../Ingredient/Ingredient.component';

const Burger = props => {

  const { ingredients } = props; 

  return (
    <div className="Burger">
      <div className="bun top-bun"></div>
      {!ingredients.length ? (
        <p style={{ margin: '1rem auto'}}>Add some more ingredients</p>
      ) : (
        ingredients.map((ing, idx) => <Ingredient key={`${ing}-${idx}`} type={ing} /> )
      )}
      <div className="bun bottom-bun"></div>
    </div>
  )
}

export default Burger;