import Component from '../Component';
import Spinner from '../common/Spinner';
import ErrorMessage from '../common/ErrorMessage';
import SearchResultsList from './SearchResultsList';

class SearchResults extends Component {
  static markup({ results, status }) {
    return /* html */ `
      <ul class="results">
        ${status === 'loading' ? Spinner.markup() : ''}
        ${status === 'fail' ? ErrorMessage.markup({ message: 'No recipes found for your query! Please try again ;)' }) : ''}
        ${status === 'success' ? SearchResultsList.markup({ results: results }) : ''}
      </ul>
    `;
  }
}

export default SearchResults;
