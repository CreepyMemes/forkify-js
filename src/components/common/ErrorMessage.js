import Component from '../Component';
import Icon from './Icon';

class ErrorMessage extends Component {
  static markup({ message }) {
    return /* html */ `
      <div class="error">
        <div>
          ${Icon.markup({ iconName: 'icon-alert-triangle' })}
        </div>
        <p>${message}</p>
      </div>
    `;
  }
}

export default ErrorMessage;
