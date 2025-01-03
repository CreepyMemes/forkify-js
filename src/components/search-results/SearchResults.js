import Component from '../Component';
import SearchPreview from './SearchPreview';

class SearchResults extends Component {
  static render({ results }) {
    return /* html */ `
      <ul class="results">
        ${results.map((recipe) => SearchPreview.render({ recipe })).join('')}
      </ul>
    `;
  }
}

export default SearchResults;
