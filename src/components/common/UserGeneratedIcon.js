import Component from '../Component';
import Icon from './Icon';

class UserGeneratedIcon extends Component {
  static render({ iconClass }) {
    return /* html */ `
      <div class="${iconClass}__user-generated">
        ${Icon.render({ iconName: 'icon-user' })}
      </div>
    `;
  }
}

export default UserGeneratedIcon;
