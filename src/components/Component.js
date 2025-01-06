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

    // Create a temporary element to parse the HTML string
    const temp = document.createElement('div');
    temp.innerHTML = this.constructor.markup(props);

    // Get the new element from the temp container
    const newElement = temp.firstElementChild;

    // Replace the old container with the new element
    this.container.replaceWith(newElement);

    // Update the container reference
    this.container = newElement;
  }

  _subscribe(event, handler, target = this.container) {
    target.addEventListener(event, handler);
  }
}

export default Component;
