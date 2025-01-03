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
    this.container.innerHTML = this.constructor.markup(props);
  }

  _subscribe(event, handler, target = this.container) {
    target.addEventListener(event, handler);
  }
}

export default Component;
