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
            <button data-update-to="${recipe.servings - 1}" class="btn--tiny btn--update-servings">
              ${Icon.markup({ iconName: 'icon-minus-circle' })}
            </button>
            <button data-update-to="${recipe.servings + 1}" class="btn--tiny btn--update-servings">
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

  subscribe(handler) {
    this._subscribe(
      'click',
      (event) => {
        const btn = event.target.closest('.btn--update-servings');
        if (!btn) return;

        const servings = Number(btn.dataset.updateTo);
        if (servings < 1) return;

        handler(servings);
      },
      document, // Temporary fix by delegating event listener from document
    );
  }
}

export default RecipeDetails;
