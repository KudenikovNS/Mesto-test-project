export class FormValidator {
  constructor(validationConfig, formElement) {
    this._formElement = formElement;
    this._inputElement = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputElement)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidaty = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _setSubmitButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  };

  disableSubmitButton = () => {
    this._buttonElement.setAttribute('disabled', '');
    this._buttonElement.classList.add(this._inactiveButtonClass);
  };

  enableSubmitButton = () => {
    this._buttonElement.removeAttribute('disabled');
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  };

  setEventListeners = () => {
    this._setSubmitButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidaty(inputElement);
        this._setSubmitButtonState();
      });
    });
  };

  resetValid() {
    this._setSubmitButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}
