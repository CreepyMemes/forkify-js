import Component from '../Component';
import Icon from './Icon';

class Spinner extends Component {
  static render() {
    return /* html */ `
      <div class="spinner">
        ${Icon.render({ iconName: 'icon-loader' })}
      </div>
    `;
  }
}

export default Spinner;
