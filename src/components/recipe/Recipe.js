import Component from '../Component';
import RecipeFigure from './RecipeFigure';
import RecipeDetails from './RecipeDetails';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirections from './RecipeDirections';
import { getRecipeIdFromHash } from '../../utils/helpers';
import ErrorMessage from '../common/ErrorMessage';
import Spinner from '../common/Spinner';

class Recipe extends Component {
  constructor(container) {
    super(container);
    this.spinner = new Spinner(container);
    this.details = new RecipeDetails(container);

    this._errorMessage = new ErrorMessage(container);
    this.errorMessage = {
      render: () => {
        this._errorMessage.render({ message: 'We could not find that recipe. Please try another one!' });
      },
    };
  }

  static markup({ recipe }) {
    return /* html */ `
      ${RecipeFigure.markup({ recipe })}
      ${RecipeDetails.markup({ recipe })}
      ${RecipeIngredients.markup({ recipe })}
      ${RecipeDirections.markup({ recipe })} 
    `;
  }

  subscribe(handler) {
    ['hashchange', 'load'].forEach((event) => this._subscribe(event, handler, window));
  }

  getId() {
    return getRecipeIdFromHash();
  }
}

export default Recipe;
