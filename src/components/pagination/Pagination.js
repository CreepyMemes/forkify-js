import Component from '../Component';
import PaginationButton from './PaginationButton';

class Pagination extends Component {
  static markup({ page, totalResults, resultsPerPage }) {
    return /* html */ `
      ${page > 1 ? PaginationButton.markup({ page: page - 1, side: 'left' }) : ''}
      ${page * resultsPerPage < totalResults ? PaginationButton.markup({ page: page + 1, side: 'right' }) : ''}
    `;
  }
}

export default Pagination;
