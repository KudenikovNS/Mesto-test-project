// Переменные для попапа
const popup = document.querySelector(".popup");
const openPopupButton = document.querySelector(".profile__button-edit");
const closePopupButton = document.querySelector(".popup__button-close");

// Переменные для формы
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-profession");

// Еще переменные
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleProfileFormSubmit);
