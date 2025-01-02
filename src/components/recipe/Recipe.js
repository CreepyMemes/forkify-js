import Component from '../Component';
import RecipeFigure from './RecipeFigure';
import RecipeDetails from './RecipeDetails';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirections from './RecipeDirections';

// Initialize Event Handlers
// ['hashchange', 'load'].forEach((event) => window.addEventListener(event, controlRecipies));

class Recipe extends Component {
  static render({ recipe }) {
    return /* html */ `
      ${RecipeFigure.render({ recipe })}
      ${RecipeDetails.render({ recipe })}
      ${RecipeIngredients.render({ recipe })}
      ${RecipeDirections.render({ recipe })} 
    `;
  }
}

export default Recipe;
