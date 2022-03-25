import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";

const elements = document.querySelector(".photo-grid");
const openPopupButtonProfile = document.querySelector(".profile__button-edit");
const openPopupButtonCadrAdd = document.querySelector(".profile__button-add");
const nameInputProfile = document.querySelector(".profile__title");
const subnameInputProfile = document.querySelector(".profile__subtitle");

const popups = document.querySelectorAll(".popup");

const popupProfile = document.querySelector(".popup_profile");
const popupFormProfile = popupProfile.querySelector(".popup__form");
const nameInput = popupFormProfile.querySelector(".popup__input-name");
const subnameInput = popupFormProfile.querySelector(".popup__input-profession");

const popupCardPhoto = document.querySelector(".popup_card-photo");
const nameInputCardPhoto = popupCardPhoto.querySelector(".popup__input-name");
const subnameInputCardPhoto = popupCardPhoto.querySelector(
  ".popup__input-profession"
);
const formPopupCardPhoto = popupCardPhoto.querySelector(".popup__form");
const closePopupButtonCardPhoto = popupCardPhoto.querySelector(
  ".popup__button-close"
);
const submitButtonSave = popupCardPhoto.querySelector(".popup__button-save");

const popupSizePhoto = document.querySelector(".popup_size-photo");
const photoPopup = popupSizePhoto.querySelector(".popup__photo");
const namePhotoPopup = popupSizePhoto.querySelector(".popup__photo-name");
const closePopupButtonSizePhoto = popupSizePhoto.querySelector(
  ".popup__button-close"
);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
}

function closeEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpen = document.querySelector(".popup_opened");
    closePopup(popupOpen);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEsc);
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__button-close")) {
      closePopup(popup);
    }
  });
});

function createCardPhoto(text, image) {
  const card = new Card(text, image, ".template");
  const cardElement = card.renderCard();
  return cardElement;
}

const addCardPhoto = (card) => {
  elements.prepend(card);
};

initialCards.forEach((item) => {
  const card = createCardPhoto(item.name, item.link);
  addCardPhoto(card);
});

openPopupButtonProfile.addEventListener("click", function () {
  openPopup(popupProfile);
  nameInput.value = nameInputProfile.textContent;
  subnameInput.value = subnameInputProfile.textContent;
});

openPopupButtonCadrAdd.addEventListener("click", function () {
  formPopupCardPhoto.reset();
  addCardValidator.toggleButtonState();
  openPopup(popupCardPhoto);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInputProfile.textContent = nameInput.value;
  subnameInputProfile.textContent = subnameInput.value;
  closePopup(popupProfile);
}

popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

function handleCardPhotoFormSubmit(evt) {
  evt.preventDefault();
  const card = createCardPhoto(
    nameInputCardPhoto.value,
    subnameInputCardPhoto.value
  );
  addCardPhoto(card);
  closePopup(popupCardPhoto);
}

formPopupCardPhoto.addEventListener("submit", handleCardPhotoFormSubmit);

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__error_input",
  errorClass: "popup__input_active",
};

const editProfileValidator = new FormValidator(validationConfig, popupFormProfile);
const addCardValidator = new FormValidator(
  validationConfig,
  formPopupCardPhoto
);

editProfileValidator._enableValidation();
addCardValidator._enableValidation();

export { namePhotoPopup, photoPopup, openPopup, popupSizePhoto };
