import {
  namePhotoPopup,
  photoPopup,
  openPopup,
  popupSizePhoto,
} from "./index.js";

export class Card {
  constructor(text, image, templateCard) {
    this.text = text;
    this.image = image;
    this.templateCard = templateCard;
  }

  _getTemplate() {
    this.cardItem = document
      .querySelector(this._templateCard)
      .content.querySelector(".element")
      .cloneNode(true);
    return this.cardItem;
  }

  renderCard() {
    this.element = this._getTemplate();
    this.elementImage = this.element.querySelector("element__photo");
    this.elementText = this.element.querySelector("element__subtitle");
    this.elementButtonLike = this.element.querySelector("element__button-like");
    this.elementButtomDelete = this.element.querySelector(
      "element__button-delete"
    );
    this._elementImage.src = this._image;
    this._elementText.textContent = this._text;
    this._elementImage.alt = this._text;
    this.setEventListeners();

    return this._element;
  }

  _cardLike() {
    this._elementButtonLike.classList.toggle("element__button-like_activ");
  }

  _deleteCard() {
    this.element.remove();
  }

  _openPopupCard() {
    namePhotoPopup.textContent = this._text;
    photoPopup.src = this._image;
    photoPopup.alt = this.text;

    openPopup(popupSizePhoto);
  }
  _setEventListerners() {
    this._elementButtonLike.addEventListener("click", () => {
      this._cardLike();
    });
    this.elementButtomDelete.addEventListener("click", () => {
      this._deleteCard();
    });
    this.elementImage.addEventListener("click", () => {
      this._openPopupCard();
    });
  }
}
