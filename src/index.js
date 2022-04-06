import "./pages/index.css";

import {
  inputProfileName,
  inputProfileSubname,
  buttonOpenPopupEditProfile,
  buttonSaveInfoPopupProfile,
  popupProfile,
  popupCardPhoto,
  popupSizePhoto,
  cardsContainer,
  userNameProfile,
  userSubnameProfile,
  initialCards,
} from "./components/constants.js";

import { Section } from "./components/Section.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import { FormValidator } from "./components/FormValidator.js";
import { Card } from "./components/card.js";
import { validationConfig, setups } from "./components/constants.js";

const formValidatorCard = new FormValidator(validationConfig, popupCardPhoto);
const formValidatorInfo = new FormValidator(validationConfig, popupProfile);
formValidatorCard.setEventListeners();
formValidatorInfo.setEventListeners();

const popupWithFormEditProfile = new PopupWithForm(popupProfile, {
  submitFormHandler: (inputValues) => {
    userInfo.setUserInfo(inputValues.name, inputValues.profession);
  },
});

buttonOpenPopupEditProfile.addEventListener("click", () => {
  const { name, subname } = userInfo.getUserInfo();
  popupWithFormEditProfile.open();
  inputProfileName.value = name;
  inputProfileSubname.value = subname;
  formValidatorInfo.resetValid();
});

popupWithFormEditProfile.setEventListeners();

const popupWithFormAddCard = new PopupWithForm(popupCardPhoto, {
  submitFormHandler: (inputValues) => {
    const item = addCard({
      name: inputValues.name,
      link: inputValues.link,
    });
    cardList.addItems(item);
  },
});

buttonSaveInfoPopupProfile.addEventListener("click", () => {
  popupWithFormAddCard.open();
  formValidatorCard.resetValid();
});

popupWithFormAddCard.setEventListeners();

const popupWithImage = new PopupWithImage(popupSizePhoto);

function sizePhoto(name, link) {
  popupWithImage.open(name, link);
}

popupWithImage.setEventListeners();

function addCard(data) {
  const newCard = new Card(data, setups, sizePhoto);
  const card = newCard.addNewCard();
  return card;
}

const userInfo = new UserInfo({ userNameProfile, userSubnameProfile });

const cardList = new Section(
  {
    renderer: (card) => {
      const newCard = addCard(card);
      cardList.addItems(newCard);
    },
  },
  cardsContainer
);

cardList.renderCards(initialCards);
