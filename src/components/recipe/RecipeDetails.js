import Component from '../Component';
import Icon from '../common/Icon';
import UserGeneratedIcon from '../common/UserGeneratedIcon';

class RecipeDetails extends Component {
  static markup({ recipe }) {
    return /* html */ `
      <div class="recipe__details">
        <div class="recipe__info">
          ${Icon.markup({ iconClass: 'recipe__info-icon', iconName: 'icon-clock' })}
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        
        <div class="recipe__info">
          ${Icon.markup({ iconClass: 'recipe__info-icon', iconName: 'icon-users' })}
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              ${Icon.markup({ iconName: 'icon-minus-circle' })}
            </button>
            <button class="btn--tiny btn--increase-servings">
              ${Icon.markup({ iconName: 'icon-plus-circle' })}    
            </button>
          </div>
        </div>

        <div class="recipe__icons-container">
          ${recipe.key ? UserGeneratedIcon.markup({ iconClass: 'recipe' }) : ''}
          
          <button class="btn--round">
            ${Icon.markup({ iconName: 'icon-bookmark-fill' })}
          </button>
        </div>
      </div>
    `;
  }
}

export default RecipeDetails;
