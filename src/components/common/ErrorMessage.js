import Component from '../Component';
import Icon from './Icon';

class ErrorMessage extends Component {
  static render({ message }) {
    return /* html */ `
      <div class="error">
        <div>
          ${Icon.render({ iconName: 'icon-alert-triangle' })}
        </div>
        <p>${message}</p>
      </div>
    `;
  }
}

export default ErrorMessage;
