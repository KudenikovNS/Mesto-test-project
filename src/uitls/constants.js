export const inputProfileName = document.querySelector(".popup__input-profile-name");
export const inputProfileSubname = document.querySelector(".popup__input-profile-subname");
export const imageSizePhoto = document.querySelector(".popup__photo");

export const buttonOpenPopupEditProfile = document.querySelector(".profile__button-edit");
export const buttonAddPopupProfile = document.querySelector(".profile__button-add");

export const cardsContainer = document.querySelector(".photo-grid");

export const popupProfile = document.querySelector(".popup_profile");
export const popupCardPhoto = document.querySelector(".popup_card-photo");
export const popupSizePhoto = document.querySelector(".popup_size-photo");

export const userNameProfile = ".profile__title";
export const userSubnameProfile = ".profile__subtitle";

export const initialCards = [
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

export const setups = {
  templateCardSelector:".template",
  elementCardSelector:".element",
  deleteButtonCardSelector:".element__button-delete",
  imageCardSelector:".element__photo",
  subtitleCardSelector:".element__subtitle",
};

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__error-input_type",
  errorClass: "popup__input_active",
}
