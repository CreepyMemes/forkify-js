import Component from '../Component';
import Icon from '../common/Icon';

class SearchPagination extends Component {
  static markup() {
    return /* html */ `
      <button class="btn--inline pagination__btn--prev">
        ${Icon.markup({ iconClass: 'search__icon', iconName: 'icon-arrow-left' })}
        <span>Page 1</span>
      </button>

      <button class="btn--inline pagination__btn--next">
        <span>Page 3</span>
        ${Icon.markup({ iconClass: 'search__icon', iconName: 'icon-arrow-right' })}
      </button>
    `;
  }
}

export default SearchPagination;
