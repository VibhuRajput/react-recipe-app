import React from 'react';
import style from './recipe.module.css';
export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        <b>Calories: {calories.toFixed(1)}</b>
      </p>
      <img src={image} alt={title} className={style.image} />
    </div>
  );
}
