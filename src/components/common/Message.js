import Component from '../Component';
import Icon from './Icon';

class Message extends Component {
  static render({ message }) {
    return /* html */ `
      <div class="message">
        <div>
          ${Icon.render({ iconName: 'icon-smile' })}
        </div>
        <p>${message}</p>
      </div>
    `;
  }
}

export default Message;
