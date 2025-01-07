import Component from '../Component';
import Preview from '../common/Preview';

class HeaderBookmarksList extends Component {
  static markup({ bookmarks }) {
    return /* html */ ` 
      <ul class="bookmarks__list">
        ${bookmarks.map((bookmark) => Preview.markup({ recipe: bookmark })).join('')}
      </ul>
    `;
  }
}

export default HeaderBookmarksList;
