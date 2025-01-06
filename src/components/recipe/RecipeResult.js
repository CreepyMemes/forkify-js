import Component from '../Component';
import RecipeFigure from './RecipeFigure';
import RecipeDetails from './RecipeDetails';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirections from './RecipeDirections';

class RecipeResult extends Component {
  static markup({ recipe }) {
    return /* html */ `
      ${RecipeFigure.markup({ recipe })}
      ${RecipeDetails.markup({ recipe })}
      ${RecipeIngredients.markup({ recipe })}
      ${RecipeDirections.markup({ recipe })}
    `;
  }
}

export default RecipeResult;
