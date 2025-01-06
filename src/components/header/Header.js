import logoPath from '../../img/logo.png';

import Component from '../Component';
import Icon from '../common/Icon';
import Search from '../search/Search';

class Header extends Component {
  constructor(container) {
    super(container);

    // this.somehting = new Something(idk)
  }

  static markup() {
    return /* html */ `
      <header class="header">
        <img src="${logoPath}" alt="Logo" class="header__logo" />

        <div class="search-container">
          ${Search.markup()}
        </div>

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
              <div class="bookmarks">
                <ul class="bookmarks__list">
                  <div class="message">
                    <div>
                      ${Icon.markup({ iconName: 'icon-smile' })}
                    </div>
                    <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
                  </div>

                  <!-- <li class="preview">
                    <a class="preview__link" href="#23456">
                      <figure class="preview__fig">
                        <img src="src/img/test-1.jpg" alt="Test" />
                      </figure>
                      <div class="preview__data">
                        <h4 class="preview__name">
                          Pasta with Tomato Cream ...
                        </h4>
                        <p class="preview__publisher">The Pioneer Woman</p>
                      </div>
                    </a>
                  </li> -->
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

export default Header;
