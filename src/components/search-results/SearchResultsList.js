import Component from '../Component';
import Preview from '../common/Preview';

class SearchResultsList extends Component {
  static markup({ results }) {
    return /* html */ `
      ${results.map((recipe) => Preview.markup({ recipe })).join('')}
    `;
  }
}

export default SearchResultsList;
