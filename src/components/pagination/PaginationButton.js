import Component from '../Component';
import Icon from '../common/Icon';

// <button class="btn--inline pagination__btn--prev">
//         ${Icon.markup({ iconClass: 'search__icon', iconName: 'icon-arrow-left' })}
//         <span>${page - 1}</span>
//       </button>

//       <button class="btn--inline pagination__btn--next">
//         <span>${page + 1}</span>
//         ${Icon.markup({ iconClass: 'search__icon', iconName: 'icon-arrow-right' })}
//       </button>

class PaginationButton extends Component {
  static markup({ page, side }) {
    return /* html */ `
      <button class="btn--inline pagination__btn--${side == 'left' ? 'prev' : 'next'}">
        ${Icon.markup({ iconClass: 'search__icon', iconName: `icon-arrow-${side}` })}
        <span>${page}</span>
      </button>
    `;
  }
}

export default PaginationButton;
