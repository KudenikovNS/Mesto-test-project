export class Card {
  constructor(data, cardSelector, sizePhoto, deleteConfirm, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._id = data.id;
    this._cardSelector = cardSelector;
    this._sizePhoto = sizePhoto;
    this._deleteConfirm = deleteConfirm;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const copyCard = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return copyCard;
  }

  _activeLike = () => {
    this._element
      .querySelector(".element__button-like")
      .classList.add("element__button-like_activ");
  };

  _disableLike = () => {
    this._element
      .querySelector(".element__button-like")
      .classList.remove("element__button-like_activ");
  };

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._element.querySelector(
      ".element__counter-like"
    );
    likeCountElement.textContent = this._likes.length;

    if (this.isLiked()) {
      this._activeLike();
    } else {
      this._disableLike();
    }
  }

  isLiked() {
    const userHasLikeCard = this._likes.find(
      (user) => user._id === this._userId
    );

    return userHasLikeCard;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListenersInCard();
    const cardImage = this._element.querySelector(".element__photo");
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector(".element__subtitle").textContent = this._name;
    this.setLikes(this._likes);
    if (this._ownerId !== this._userId) {
      this._element.querySelector(".element__button-delete").style.display =
        "none";
    }
    return this._element;
  }

  handleDeleteCard = () => {
    this._element.remove();
  };

  _setEventListenersInCard() {
    this._element
      .querySelector(".element__button-like")
      .addEventListener("click", () => {
        this._handleLikeClick(this._id);
      });

    this._element
      .querySelector(".element__button-delete")
      .addEventListener("click", () => {
        this._deleteConfirm(this._id);
      });

    this._element
      .querySelector(".element__photo")
      .addEventListener("click", () => {
        this._sizePhoto(this._name, this._link);
      });
  }
}
