import Component from '../Component';
import Icon from '../common/Icon';

class SearchPreviewUser extends Component {
  static render() {
    return /* html */ `
      <div class="preview__user-generated">
        ${Icon.render({ iconName: 'icon-user' })}
      </div>
    `;
  }
}

export default SearchPreviewUser;
