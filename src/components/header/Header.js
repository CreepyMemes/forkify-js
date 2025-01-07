import logoPath from '../../img/logo.png';
import Component from '../Component';
import Icon from '../common/Icon';
import Search from '../search/Search';
import HeaderBookmarks from './HeaderBookmarks';

class Header extends Component {
  static markup({ bookmarks }) {
    return /* html */ `
      <header class="header">
        <img src="${logoPath}" alt="Logo" class="header__logo" />

        ${Search.markup()}
        
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <button class="nav__btn nav__btn--add-recipe">
                ${Icon.markup({ iconClass: 'nav__icon', iconName: 'icon-edit' })}
                <span>Add recipe</span>
              </button>
            </li>
            
            <li class="nav__item">
              <button class="nav__btn nav__btn--bookmarks">
                ${Icon.markup({ iconClass: 'nav__icon', iconName: 'icon-bookmark' })}
                <span>Bookmarks</span>
              </button>

              ${HeaderBookmarks.markup({ bookmarks })}
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

export default Header;
