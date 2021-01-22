export class Section {
  constructor({
    items,
    renderer
  }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }
  addItem(element, isArray) {

    if (isArray) {
      this._container.append(element);
    } else {
      this._container.prepend(element);
    }
  }

}