import Component from '../Component';
import Message from '../common/Message';
import HeaderBookmarksList from './HeaderBookmarksList';

class HeaderBookmarks extends Component {
  static markup({ bookmarks }) {
    return /* html */ ` 
      <div class="bookmarks">
        ${bookmarks.length < 1 ? Message.markup({ message: 'No bookmarks yet. Find a nice recipe and bookmark it :)' }) : ''}
        ${bookmarks.length > 0 ? HeaderBookmarksList.markup({ bookmarks }) : ''}
      </div>    
    `;
  }
}

export default HeaderBookmarks;
