import Component from '../Component';
import SearchPreview from './SearchPreview';
import SearchPagination from './SearchPagination';
import Spinner from '../common/Spinner';
import ErrorMessage from '../common/ErrorMessage';

class SearchResults extends Component {
  constructor(container) {
    super(container);
    this._spinner = new Spinner(container);
    this._errorMessage = new ErrorMessage(container);

    this.spinner = {
      render: () => {
        this._spinner.render();
      },
    };

    this.errorMessage = {
      render: () => {
        this._errorMessage.render({ message: 'No recipes found for your query! Please try again ;)' });
      },
    };
  }

  static markup({ results }) {
    return /* html */ `
      <div class="search-results">
        <ul class="results">
          ${results.map((recipe) => SearchPreview.markup({ recipe })).join('')}
        </ul>
      </div>

      ${SearchPagination.markup()}
    `;
  }
}

export default SearchResults;
