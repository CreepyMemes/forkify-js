import Component from '../Component';
import iconsPath from '../../img/icons.svg';

class Icon extends Component {
  static render({ iconClass = '', iconName }) {
    return /* html */ `
      <svg class="${iconClass}">
        <use href="${iconsPath}#${iconName}"></use>
      </svg>
    `;
  }
}

export default Icon;
