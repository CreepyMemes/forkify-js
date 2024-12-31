import Icon from '../common/Icon';

function RecipeIngredient({ ingredient }) {
  return /* html */ `
  <li class="recipe__ingredient">
    ${Icon({ iconClass: 'recipe__icon', iconName: 'icon-check' })}
    <div class="recipe__quantity">${ingredient.quantity}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${ingredient.unit}</span>
      ${ingredient.description}
    </div>
  </li>
  `;
}

export default RecipeIngredient;
