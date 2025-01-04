import logoPath from './img/logo.png';

import Recipe from './components/recipe/Recipe';
import SearchResults from './components/search-results/SearchResults';
import Search from './components/search/Search';
import Icon from './components/common/Icon';
import Component from './components/Component';
import Message from './components/common/Message';

class App extends Component {
  constructor(container) {
    super(container);
  }

  init() {
    // Hydrate initial page
    this.render();

    // Initialize sub-components so that they can be rerendered
    this.recipe = new Recipe(document.querySelector('.recipe'));
    this.search = new Search(document.querySelector('.search'));
    this.searchResults = new SearchResults(document.querySelector('.search-results-container'));
  }

  static markup() {
    return /* html */ `
      <div class="container">
        <header class="header">
          <img src="${logoPath}" alt="Logo" class="header__logo" />

          <form class="search">
            ${Search.markup()}
          </form>

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

        <div class="search-results-container">
          ${Message.markup({ message: 'Search results will be displayed here' })}
        </div>

        <div class="recipe">
          ${Message.markup({ message: 'Start by searching for a recipe or an ingredient. Have fun!' })}
        </div>
      </div>

      <div class="overlay hidden"></div>
      <div class="add-recipe-window hidden">
        <button class="btn--close-modal">&times;</button>
        <form class="upload">
          <div class="upload__column">
            <h3 class="upload__heading">Recipe data</h3>
            <label>Title</label>
            <input value="TEST" required name="title" type="text" />
            <label>URL</label>
            <input value="TEST" required name="sourceUrl" type="text" />
            <label>Image URL</label>
            <input value="TEST" required name="image" type="text" />
            <label>Publisher</label>
            <input value="TEST" required name="publisher" type="text" />
            <label>Prep time</label>
            <input value="23" required name="cookingTime" type="number" />
            <label>Servings</label>
            <input value="23" required name="servings" type="number" />
          </div>

          <div class="upload__column">
            <h3 class="upload__heading">Ingredients</h3>
            <label>Ingredient 1</label>
            <input
              value="0.5,kg,Rice"
              type="text"
              required
              name="ingredient-1"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 2</label>
            <input value="1,,Avocado" type="text" name="ingredient-2" placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 3</label>
            <input value=",,salt" type="text" name="ingredient-3" placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 4</label>
            <input type="text" name="ingredient-4" placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 5</label>
            <input type="text" name="ingredient-5" placeholder="Format: 'Quantity,Unit,Description'" />
            <label>Ingredient 6</label>
            <input type="text" name="ingredient-6" placeholder="Format: 'Quantity,Unit,Description'" />
          </div>

          <button class="btn upload__btn">
            ${Icon.markup({ iconName: 'icon-upload-cloud' })}
            <span>Upload</span>
          </button>
        </form>
      </div>
    `;
  }
}

export default new App(document.querySelector('.root'));
