import { getRecipeIdFromHash } from '../../utils/helpers';
import Component from '../Component';
import UserGeneratedIcon from './UserGeneratedIcon';

class Preview extends Component {
  static markup({ recipe }) {
    return /* html */ `
      <li class="preview">
        <a class="preview__link ${recipe.id === getRecipeIdFromHash() ? 'preview__link--active' : ''}" href="#${recipe.id}">
          <figure class="preview__fig">
            <img src="${recipe.imageUrl}" alt="${recipe.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${recipe.title}</h4>
            <p class="preview__publisher">${recipe.publisher}</p>
            ${recipe.key ? UserGeneratedIcon.markup({ iconClass: 'preview' }) : ''}
          </div>
        </a>
      </li>
    `;
  }
}

export default Preview;
