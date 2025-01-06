import Component from '../Component';
import SearchPreview from './SearchPreview';

class SearchResultsList extends Component {
  static markup({ results }) {
    return /* html */ `
      ${results.map((recipe) => SearchPreview.markup({ recipe })).join('')}
    `;
  }
}

export default SearchResultsList;
