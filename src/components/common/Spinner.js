import Component from '../Component';
import Icon from './Icon';

class Spinner extends Component {
  static markup() {
    return /* html */ `
      <div class="spinner">
        ${Icon.markup({ iconName: 'icon-loader' })}
      </div>
    `;
  }
}

export default Spinner;
