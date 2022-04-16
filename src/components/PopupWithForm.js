import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, { submitFormHandler }) {
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
    this._form = this._popup.querySelector(".popup__form");

    this._buttonSavePopup = this._form.querySelector(".popup__button-save");

    this._inputList = Array.from(this._popup.querySelectorAll(".popup__input"));
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  changeSubmitHandler(newHandlerSubmit) {
    this._submitFormHandler = newHandlerSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this._getInputValues());
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonSavePopup.textContent = "Сохранение...";
    } else {
      this._buttonSavePopup.textContent = "Сохранить";
    }
  }

  close() {
    super.close();
    this._form.reset();
  }
}
