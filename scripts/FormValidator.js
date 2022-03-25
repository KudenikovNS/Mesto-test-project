export class FormValidator {
  constructor(configuration, form) {
    this._form = form;
    this._configuration = configuration;
    this._buttonElement = this._form.querySelector(
      this._configuration.submitButtonSelector
    );
    this._inputList = Array.from(
      this._form.querySelectorAll(this._configuration.inputSelector)
    );
  }

  _setEventListeners() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this.toggleButtonState();
      });
    });
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._configuration.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._configuration.errorClass);
  };


  _hideInputError(inputElement) {
    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._configuration.inputErrorClass);
    errorElement.classList.remove(this._configuration.errorClass);
    errorElement.textContent = "";
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _disableSubmitButton() {
    this._buttonElement.classList.add(this._configuration.inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", "");
  }

  _enableSubmitButton() {
    this._buttonElement.classList.remove(
      this._configuration.inactiveButtonClass
    );
    this._buttonElement.removeAttribute("disabled", "");
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _enableValidation() {
    this._setEventListeners();
  }
}
