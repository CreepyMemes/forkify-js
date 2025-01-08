import Component from '../Component';
import AddRecipeUpload from './AddRecipeUpload';

class AddRecipe extends Component {
  constructor(container) {
    super(container);
    this.upload = new AddRecipeUpload(this.container.querySelector('.upload'));
  }

  static markup({ visibility }) {
    return /* html */ `
      <div class="add-recipe">
        <div class="overlay ${visibility ? '' : 'hidden'}"></div>
        
        <div class="add-recipe-window ${visibility ? '' : 'hidden'}">
          <button class="btn--close-modal">&times;</button>

          ${AddRecipeUpload.markup()}
        </div>
      </div>
    `;
  }

  subscribe(handler) {
    ['.btn--close-modal', '.overlay'].forEach((element) => {
      this._subscribe('click', handler, this.container.querySelector(element));
    });
  }
}

export default AddRecipe;
