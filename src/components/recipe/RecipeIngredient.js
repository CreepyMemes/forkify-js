import Component from '../Component';
import Icon from '../common/Icon';
import fracty from 'fracty';

class RecipeIngredient extends Component {
  static render({ ingredient }) {
    return /* html */ `
    <li class="recipe__ingredient">
      ${Icon.render({ iconClass: 'recipe__icon', iconName: 'icon-check' })}
      <div class="recipe__quantity">
        ${ingredient.quantity ? fracty(ingredient.quantity) : ''}
      </div>
      <div class="recipe__description">
        <span class="recipe__unit">${ingredient.unit}</span>
        ${ingredient.description}
      </div>
    </li>
    `;
  }
}

export default RecipeIngredient;
