import Component from '../Component';
import SearchPreview from './SearchPreview';
import Spinner from '../common/Spinner';
import ErrorMessage from '../common/ErrorMessage';

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

  static markup({ results }) {
    return /* html */ `
      <ul class="results">
        ${results.map((recipe) => SearchPreview.markup({ recipe })).join('')}
      </ul>
    `;
  }
}

export default SearchResults;
