import Component from '../Component';
import RecipeDetails from './RecipeDetails';
import Message from '../common/Message';
import Spinner from '../common/Spinner';
import ErrorMessage from '../common/ErrorMessage';
import RecipeResult from './RecipeResult';
import { getRecipeIdFromHash } from '../../utils/helpers';

class Recipe extends Component {
  constructor(container) {
    super(container);
    this.details = new RecipeDetails(this.container); // Temporary
  }

  // render(props) {
  //   super.render(props);
  // }

  static markup({ recipe, status }) {
    return /* html */ `
      <div class="recipe">
        ${status === 'idle' ? Message.markup({ message: 'Start by searching for a recipe or an ingredient. Have fun!' }) : ''}
        ${status === 'loading' ? Spinner.markup() : ''}
        ${status === 'fail' ? ErrorMessage.markup({ message: 'We could not find that recipe. Please try another one!' }) : ''}
        ${status === 'success' ? RecipeResult.markup({ recipe: recipe }) : ''}
      </div>
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
