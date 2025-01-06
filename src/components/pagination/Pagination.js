import Component from '../Component';
import PaginationButton from './PaginationButton';

class Pagination extends Component {
  static markup({ page, pages }) {
    return /* html */ `
      <div class="pagination">
        ${page > 1 ? PaginationButton.markup({ page: page - 1, side: 'left' }) : ''}
        ${page < pages ? PaginationButton.markup({ page: page + 1, side: 'right' }) : ''}
      </div>
    `;
  }

  subscribe(handler) {
    this._subscribe(
      'click',
      (event) => {
        const btn = event.target.closest('[class*="pagination__btn--"]');
        if (!btn) return;

        const page = Number(btn.dataset.goto);

        handler(page);
      },
      document, // Temporary fix by delegating event listener from document element
    );
  }
}

export default Pagination;
