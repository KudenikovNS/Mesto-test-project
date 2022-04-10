export class Card {
  constructor(data, setups, sizePhoto) {
    this._name = data.name;
    this._link = data.link;
    this._setups = setups;
    this._templateCardSelector = setups.templateCardSelector;
    this._cardItem = setups.elementCard;
    this._sizePhoto = sizePhoto;
  }

  _getTemplate() {
    const copyCard = document
      .querySelector(this._templateCardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return copyCard;
  }

  _clickButtonLike() {
    this._likeButtonCard.classList.toggle("element__button-like_activ");
  }

  _deleteCard = () => {
    this._cardItem.remove();
    this._cardItem = null;
  };

  _setEventListeners() {
    this._likeButtonCard.addEventListener("click", () =>
      this._clickButtonLike()
    );
    this._deleteButtonCardSelector.addEventListener("click", () => {
      this._deleteCard();
    });
    this._cardImage.addEventListener("click", () => {
      this._sizePhoto(this._name, this._link);
    });
  }

  addNewCard() {
    this._cardItem = this._getTemplate();
    this._subtitleCardSelector = this._cardItem.querySelector(
      this._setups.subtitleCardSelector
    );
    this._cardImage = this._cardItem.querySelector(
      this._setups.imageCardSelector
    );
    this._likeButtonCard = this._cardItem.querySelector(
      ".element__button-like"
    );
    this._deleteButtonCardSelector = this._cardItem.querySelector(
      this._setups.deleteButtonCardSelector
    );
    this._subtitleCardSelector.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._cardItem;
  }
}
