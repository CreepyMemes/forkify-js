import morphdom from 'morphdom';

class Component {
  constructor(container) {
    if (!container) {
      throw new Error('Container element is required.');
    }
    this.container = container;
  }

  render(props) {
    if (typeof this.constructor.markup !== 'function') {
      throw new Error('Static markup generator method must be implemented in the child class.');
    }

    // Rerender the element efficiently through built-in diffing algorythm
    morphdom(this.container, this.constructor.markup(props), {
      onBeforeElUpdated: (fromEl, toEl) => {
        if (fromEl.tagName === 'IMG' && fromEl.src !== toEl.src) {
          fromEl.replaceWith(toEl.cloneNode(true));
          return false;
        }
        return true;
      },
    });
  }

  _subscribe(event, handler, target = this.container) {
    target.addEventListener(event, handler);
  }
}

export default Component;
