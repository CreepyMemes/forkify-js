import Component from '../Component';
import Message from '../common/Message';

class HeaderBookmarks extends Component {
  static markup() {
    return /* html */ ` 
      <div class="bookmarks">
        <ul class="bookmarks__list">
          ${Message.markup({ message: 'No bookmarks yet. Find a nice recipe and bookmark it :)' })}

          <!-- <li class="preview">
            <a class="preview__link" href="#23456">
              <figure class="preview__fig">
                <img src="src/img/test-1.jpg" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__name">
                  Pasta with Tomato Cream ...
                </h4>
                <p class="preview__publisher">The Pioneer Woman</p>
              </div>
            </a>
          </li> -->
        </ul>
      </div>    
    `;
  }
}

export default HeaderBookmarks;
