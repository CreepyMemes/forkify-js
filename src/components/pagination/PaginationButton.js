import Component from '../Component';
import Icon from '../common/Icon';

class PaginationButton extends Component {
  static markup({ page, side }) {
    const iconMarkup = Icon.markup({
      iconClass: 'search__icon',
      iconName: `icon-arrow-${side}`,
    });

    const spanMarkup = /* html */ `<span>Page ${page}</span>`;

    return /* html */ `
      <button class="btn--inline pagination__btn--${side == 'left' ? 'prev' : 'next'}">
      ${side === 'left' ? `${iconMarkup}${spanMarkup}` : `${spanMarkup}${iconMarkup}`}
      </button>
    `;
  }
}

export default PaginationButton;
