import RecipeFigure from './RecipeFigure';
import RecipeDetails from './RecipeDetails';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirections from './RecipeDirections';

function Recipe({ recipe }) {
  return /* html */ `
    ${RecipeFigure({ recipe })}
    ${RecipeDetails({ recipe })}
    ${RecipeIngredients({ recipe })}
    ${RecipeDirections({ recipe })} 
  `;
}

export default Recipe;
