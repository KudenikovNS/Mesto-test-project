export class Popup {
  constructor(popupSelector) {
    this._popupElement = popupSelector;
    this._closeEsc = this._closeEsc.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._closeEsc);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.addEventListener("keydown", this._closeEsc);
  }

  _closeEsc(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup__button-close")) {
        this.close();
      }
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
}
