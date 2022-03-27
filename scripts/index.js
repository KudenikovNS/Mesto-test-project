//Экспортируемые данные
import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";

//Элементы профиля
const elements = document.querySelector(".photo-grid");
const openPopupButtonProfile = document.querySelector(".profile__button-edit");
const openPopupButtonCadrAdd = document.querySelector(".profile__button-add");
const nameInputProfile = document.querySelector(".profile__title");
const subnameInputProfile = document.querySelector(".profile__subtitle");

//Попапы
const popups = document.querySelectorAll(".popup");

//Элементы попапа профиля
const popupProfile = document.querySelector(".popup_profile");
const popupFormProfile = popupProfile.querySelector(".popup__form");
const nameInput = popupFormProfile.querySelector(".popup__input-name");
const subnameInput = popupFormProfile.querySelector(".popup__input-profession");

//Элементы попапа добавления новой карточки
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

//Элементы попапа изображений
const popupSizePhoto = document.querySelector(".popup_size-photo");
const photoPopup = popupSizePhoto.querySelector(".popup__photo");
const namePhotoPopup = popupSizePhoto.querySelector(".popup__photo-name");
const closePopupButtonSizePhoto = popupSizePhoto.querySelector(
  ".popup__button-close"
);

// Массив изображений
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

//Функция создания новой карточки с изображением
function createCardPhoto(text, image) {
  const card = new Card(text, image, ".template");
  const cardElement = card.renderCard();
  return cardElement;
}

// Вставление карточек в начало
const addCardPhoto = (card) => {
  elements.prepend(card);
};

//Создание новой карточки
initialCards.forEach((item) => {
  const card = createCardPhoto(item.name, item.link);
  addCardPhoto(card);
});

//Функция открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
}

//Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEsc);
}

//Закрытие попапов по оверлею
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

//Функция закрытия попапов по Esc
function closeEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpen = document.querySelector(".popup_opened");
    closePopup(popupOpen);
  }
}

//Открытие и заполнение попапа профиля
openPopupButtonProfile.addEventListener("click", function () {
  nameInput.value = nameInputProfile.textContent;
  subnameInput.value = subnameInputProfile.textContent;
  openPopup(popupProfile);
});

//Открытие и заполнение попапа новой карточки
openPopupButtonCadrAdd.addEventListener("click", function () {
  formPopupCardPhoto.reset();
  addCardValidator.toggleButtonState();
  openPopup(popupCardPhoto);
});

//Передача формы в профиле
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInputProfile.textContent = nameInput.value;
  subnameInputProfile.textContent = subnameInput.value;
  closePopup(popupProfile);
}

popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

//Передача формы для новой карточки
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


//Валидация
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__error_input",
  errorClass: "popup__input_active",
};

const editProfileValidator = new FormValidator(
  validationConfig,
  popupFormProfile
);
const addCardValidator = new FormValidator(
  validationConfig,
  formPopupCardPhoto
);

editProfileValidator._enableValidation();
addCardValidator._enableValidation();

export { namePhotoPopup, photoPopup, openPopup, popupSizePhoto };
