import Component from '../Component';
import Icon from '../common/Icon';

class Search extends Component {
  static render() {
    return /* html */ `
      <input type="text" class="search__field" placeholder="Search over 1,000,000 recipes..." />
      <button class="btn search__btn">
        ${Icon.render({ iconClass: 'search__icon', iconName: 'icon-search' })}
        <span>Search</span>
      </button>
    `;
  }
}

export default Search;
