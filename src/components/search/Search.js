import Component from '../Component';
import Icon from '../common/Icon';

class Search extends Component {
  constructor(container) {
    super(container);
  }

  static markup() {
    return /* html */ `
      <input type="text" class="search__field" placeholder="Search over 1,000,000 recipes..." />
      <button class="btn search__btn">
        ${Icon.markup({ iconClass: 'search__icon', iconName: 'icon-search' })}
        <span>Search</span>
      </button>
    `;
  }

  subscribe(handler) {
    this._subscribe('submit', (event) => {
      event.preventDefault();
      handler();
    });
  }

  getQuery() {
    return this.container.querySelector('.search__field').value;
  }
}

export default Search;
