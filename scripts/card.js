import {
  namePhotoPopup,
  photoPopup,
  openPopup,
  popupSizePhoto,
} from "./index.js";

export class Card {
  constructor(text, image, templateCard) {
    this._text = text;
    this._image = image;
    this._templateCard = templateCard;
  }

  _getTemplate() {
    this.cardItem = document
      .querySelector(this._templateCard)
      .content.querySelector(".element")
      .cloneNode(true);
    return this.cardItem;
  }

  renderCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".element__photo");
    this._elementText = this._element.querySelector(".element__subtitle");
    this._elementButtonLike = this._element.querySelector(
      ".element__button-like"
    );
    this._elementButtomDelete = this._element.querySelector(
      ".element__button-delete"
    );
    this._elementImage.src = this._image;
    this._elementText.textContent = this._text;
    this._elementImage.alt = this._text;
    this._setEventListeners();

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
  _setEventListeners() {
    this._elementButtonLike.addEventListener("click", () => {
      this._cardLike();
    });
    this._elementButtomDelete.addEventListener("click", () => {
      this._deleteCard();
    });
    this._elementImage.addEventListener("click", () => {
      this._openPopupCard();
    });
  }
}
