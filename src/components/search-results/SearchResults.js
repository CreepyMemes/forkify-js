import Component from '../Component';
import SearchPreview from './SearchPreview';
import SearchPagination from './SearchPagination';

class SearchResults extends Component {
  static render({ results }) {
    return /* html */ `
      <div class="search-results">
        <ul class="results">
          ${results.map((recipe) => SearchPreview.render({ recipe })).join('')}
        </ul>
      </div>

      ${SearchPagination.render()}
    `;
  }
}

export default SearchResults;
