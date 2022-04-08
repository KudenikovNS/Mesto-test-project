export class Card {
  constructor(data, setups, sizePhoto) {
    this._name = data.name;
    this._link = data.link;
    this._setups = setups;
    this._templateCard = setups.templateCard;
    this._cardItem = setups.elementCard;
    this._sizePhoto = sizePhoto;
  }

  _getTemplate() {
    const copyCard = document
      .querySelector(this._templateCard)
      .content.querySelector(".element")
      .cloneNode(true);
    return copyCard;
  }

  _clickButtonLike(likeButtonCard) {
    likeButtonCard.classList.toggle("element__button-like_activ");
  }

  _deleteCard = () => {
    this._cardItem.remove();
    this._cardItem = null;
  };

  _setEventListeners() {
    this._likeButtonCard.addEventListener("click", () => {
      this._clickButtonLike(this._likeButtonCard);
    });
    this._deleteButtonCard.addEventListener("click", () => {
      this._deleteCard(this._cardItem);
    });
    this._cardImage.addEventListener("click", () => {
      this._sizePhoto(this._name, this._link);
    });
  } 

  addNewCard() {
    this._cardItem = this._getTemplate();
    this._cardSubtitle = this._cardItem.querySelector(this._setups.subtitlePhoto);
    this._cardImage = this._cardItem.querySelector(this._setups.imagePhoto);
    this._likeButtonCard = this._cardItem.querySelector(this._setups.likeButtonCard);
    this._deleteButtonCard = this._cardItem.querySelector(this._setups.deleteButtonCard);
    this._cardSubtitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._cardItem;
  }
}
