import Component from '../Component';
import Icon from '../common/Icon';

class RecipeDirections extends Component {
  static render({ recipe }) {
    return /* html */ `
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${recipe.publisher}</span>. 
          Please check outdirections at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          ${Icon.render({ iconClass: 'search__icon', iconName: 'icon-arrow-right' })}
        </a>
      </div>
    `;
  }
}

export default RecipeDirections;
