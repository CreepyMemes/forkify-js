import Component from '../Component';
import Icon from './Icon';

class UserGeneratedIcon extends Component {
  static markup({ iconClass }) {
    return /* html */ `
      <div class="${iconClass}__user-generated">
        ${Icon.markup({ iconName: 'icon-user' })}
      </div>
    `;
  }
}

export default UserGeneratedIcon;
