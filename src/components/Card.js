export class Card {
  constructor(data, setups, sizePhoto) {
    this._name = data.name;
    this._link = data.link;
    this._template = setups.template;
    this._cardItem = setups.element;
    this._deleteButton = setups.deleteButton;
    this._cardImage = setups.image;
    this._subtitle = setups.subtitle;
    this._likeButton = setups.likeButton;
    this._sizePhoto = sizePhoto;
  }

  _getTemplate() {
    const copyCard = document
      .querySelector(this._template)
      .content.querySelector(".element")
      .cloneNode(true);
    return copyCard;
  }

  _clickButtonLike(likeButton) {
    likeButton.classList.toggle("element__button-like_activ");
  }

  _deleteCard = () => {
    this._cardItem.remove();
    this._cardItem = null;
  };

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._clickButtonLike(this._likeButton);
    });
    this._deleteButton.addEventListener("click", () => {
      this._deleteCard(this._cardItem);
    });
    this._cardImage.addEventListener("click", () => {
      this._sizePhoto(this._name, this._link);
    });
  }

  addNewCard() {
    this._cardItem = this._getTemplate();
    this._cardSubtitle = this._cardItem.querySelector(this._subtitle);
    this._cardImage = this._cardItem.querySelector(this._cardImage);
    this._likeButton = this._cardItem.querySelector(this._likeButton);
    this._deleteButton = this._cardItem.querySelector(this._deleteButton);
    this._cardSubtitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._cardItem;
  }
}
