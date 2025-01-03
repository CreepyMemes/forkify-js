import Component from '../Component';
import Icon from './Icon';

class Message extends Component {
  static markup({ message }) {
    return /* html */ `
      <div class="message">
        <div>
          ${Icon.markup({ iconName: 'icon-smile' })}
        </div>
        <p>${message}</p>
      </div>
    `;
  }
}

export default Message;
