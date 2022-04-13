export class Section {
  constructor({ renderer }, cardsContainer) {
    this._renderer = renderer;
    this._container = cardsContainer;
  }

  renderCards(data) {
    data.forEach((item) => {
      this._renderer(item);
    });
  }

  addItems(card) {
    this._container.prepend(card);
  }
}