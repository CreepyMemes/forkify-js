import Component from '../Component';
import SearchPreview from './SearchPreview';

class SearchResults extends Component {
  static render({ recipes }) {
    return /* html */ `
      <ul class="results">
        ${recipes.map((recipe) => SearchPreview.render({ recipe })).join('')}
      </ul>
    `;
  }
}

export default SearchResults;
