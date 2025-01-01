import Component from '../Component';
import Icon from '../common/Icon';

class RecipeDetails extends Component {
  static render({ recipe }) {
    return /* html */ `
      <div class="recipe__details">
        <div class="recipe__info">
          ${Icon.render({ iconClass: 'recipe__info-icon', iconName: 'icon-clock' })}
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        
        <div class="recipe__info">
          ${Icon.render({ iconClass: 'recipe__info-icon', iconName: 'icon-users' })}
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              ${Icon.render({ iconName: 'icon-minus-circle' })}
            </button>
            <button class="btn--tiny btn--increase-servings">
              ${Icon.render({ iconName: 'icon-plus-circle' })}    
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          ${Icon.render({ iconName: 'icon-user' })}
        </div>
        
        <button class="btn--round">
          ${Icon.render({ iconName: 'icon-bookmark-fill' })}
        </button>
      </div>
    `;
  }
}

export default RecipeDetails;
