
// Переменные для попапа
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__button-edit');
let closePopupButton = document.querySelector('.popup__button-close');

// Переменные для формы 
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-profession');

// Еще переменные
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

function openPopup () {
  popup.classList.add('popup__opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup () {
  popup.classList.remove('popup__opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup ()
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);