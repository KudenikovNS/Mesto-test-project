const openPopupButtonProfile = document.querySelector(".profile__button-edit");
const openPopupButtonCadrAdd = document.querySelector(".profile__button-add");

const popupProfile = document.querySelector(".popup_profile");
const closePopupButtonProfile = popupProfile.querySelector(
  ".popup__button-close"
);

const popupCardPhoto = document.querySelector(".popup_card-photo");
const nameInputCardPhoto = popupCardPhoto.querySelector(".popup__input-name");
const subnameInputCardPhoto = popupCardPhoto.querySelector(
  ".popup__input-profession"
);
const closePopupButtonCardPhoto = popupCardPhoto.querySelector(
  ".popup__button-close"
);
const formPopupCardPhoto = popupCardPhoto.querySelector(".popup__form");

const popupFormProfile = popupProfile.querySelector(".popup__form-profile");
const nameInput = popupFormProfile.querySelector(".popup__input-name");
const subnameInput = popupFormProfile.querySelector(".popup__input-profession");

const nameInputProfile = document.querySelector(".profile__title");
const subnameInputProfile = document.querySelector(".profile__subtitle");

const popupSizePhoto = document.querySelector(".popup_size-photo");
const photoPopup = popupSizePhoto.querySelector(".popup__photo");
const namePhotoPopup = popupSizePhoto.querySelector(".popup__photo-name");
const closePopupButtonSizePhoto = popupSizePhoto.querySelector(
  ".popup__button-close"
);

const elements = document.querySelector(".photo-grid");
const template = document.querySelector(".template").content;

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

openPopupButtonProfile.addEventListener("click", function () {
  openPopup(popupProfile);
  nameInput.value = nameInputProfile.textContent;
  subnameInput.value = subnameInputProfile.textContent;
});

closePopupButtonProfile.addEventListener("click", function () {
  closePopup(popupProfile);
});

openPopupButtonCadrAdd.addEventListener("click", function () {
  openPopup(popupCardPhoto);
});

closePopupButtonCardPhoto.addEventListener("click", function () {
  closePopup(popupCardPhoto);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInputProfile.textContent = nameInput.value;
  subnameInputProfile.textContent = subnameInput.value;
  closePopup(popupProfile);
}

popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

function createCardPhoto(name, link) {
  const cardPhoto = template.querySelector(".element").cloneNode(true);
  const subtitileElement = cardPhoto.querySelector(".element__subtitle");
  const photoElement = cardPhoto.querySelector(".element__photo");
  subtitileElement.textContent = name;
  photoElement.src = link;
  photoElement.alt = name;
  cardPhoto
    .querySelector(".element__button-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__button-like_activ");
    });
  photoElement.addEventListener("click", function () {
    openPopup(popupSizePhoto);
    photoPopup.src = link;
    photoPopup.alt = name;
    namePhotoPopup.textContent = name;
  });
  cardPhoto
    .querySelector(".element__botton-delete")
    .addEventListener("click", function (evt) {
      evt.target.closest(".element").remove();
    });
  return cardPhoto;
}

closePopupButtonSizePhoto.addEventListener("click", function () {
  closePopup(popupSizePhoto);
});

initialCards.forEach(function (item) {
  elements.prepend(createCardPhoto(item.name, item.link));
});

function handleCardPhotoFormSubmit(evt) {
  evt.preventDefault();
  elements.prepend(
    createCardPhoto(nameInputCardPhoto.value, subnameInputCardPhoto.value)
  );
  closePopup(popupCardPhoto);
  formPopupCardPhoto.reset();
}

formPopupCardPhoto.addEventListener("submit", handleCardPhotoFormSubmit);
