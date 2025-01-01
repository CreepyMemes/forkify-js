class Component {
  #parentElement;

  constructor(parentElement) {
    if (!parentElement) throw new Error('A parent element must be specified.');
    this.#parentElement = parentElement;
  }

  display(state) {
    // Use the class's constructor to access the static `render` method
    if (typeof this.constructor.render !== 'function') {
      throw new Error('Static render method must be implemented in the child class.');
    }

    this.#parentElement.innerHTML = this.constructor.render(state);
  }
}

export default Component;
