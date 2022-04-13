import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._imageSizePhoto = this._popup.querySelector(".popup__photo");
    this._popupImageName = this._popup.querySelector(".popup__photo-name");
  }

  open(name, link) {
    super.open();
    this._imageSizePhoto.src = link;
    this._imageSizePhoto.alt = name;
    this._popupImageName.textContent = name;
  }
}
