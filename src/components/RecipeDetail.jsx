import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const recipe = useSelector((state) =>
    state.recipes.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <div className="container mt-4">Recipe not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      {/* Render other recipe details here */}
    </div>
  );
};

export default RecipeDetail;
