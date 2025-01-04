import Component from '../Component';
import PaginationButton from './PaginationButton';

class Pagination extends Component {
  static markup({ page, pages }) {
    console.log(page, pages);
    return /* html */ `
      ${page > 1 ? PaginationButton.markup({ page: page - 1, side: 'left' }) : ''}
      ${page < pages ? PaginationButton.markup({ page: page + 1, side: 'right' }) : ''}
    `;
  }
}

export default Pagination;
