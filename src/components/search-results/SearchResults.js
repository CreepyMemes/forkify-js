import Component from '../Component';
import SearchPreview from './SearchPreview';
import Spinner from '../common/Spinner';
import ErrorMessage from '../common/ErrorMessage';
import Pagination from '../pagination/Pagination';

class SearchResults extends Component {
  constructor(container) {
    super(container);
    this.spinner = new Spinner(container);

    this._errorMessage = new ErrorMessage(container);
    this.errorMessage = {
      render: () => {
        this._errorMessage.render({ message: 'No recipes found for your query! Please try again ;)' });
      },
    };
  }

  render(props) {
    super.render(props);
    this.pagination = new Pagination(document.querySelector('.pagination'));
  }

  static markup({ results }) {
    return /* html */ `
      <div class="search-results">
        <ul class="results">
          ${results.map((recipe) => SearchPreview.markup({ recipe })).join('')}
        </ul>
      </div>

      <div class="pagination"></div>
    `;
  }
}

export default SearchResults;
