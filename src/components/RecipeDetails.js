import Icon from './Icon';

function RecipeDetails({ recipe }) {
  return /* html */ `
    <div class="recipe__details">
      <div class="recipe__info">
        ${Icon({ iconClass: 'recipe__info-icon', iconName: 'icon-clock' })}
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      
      <div class="recipe__info">
        ${Icon({ iconClass: 'recipe__info-icon', iconName: 'icon-users' })}
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            ${Icon({ iconName: 'icon-minus-circle' })}
          </button>
          <button class="btn--tiny btn--increase-servings">
            ${Icon({ iconName: 'icon-plus-circle' })}    
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        ${Icon({ iconName: 'icon-user' })}
      </div>
      
      <button class="btn--round">
        ${Icon({ iconName: 'icon-bookmark-fill' })}
      </button>
    </div>
  `;
}

export default RecipeDetails;
