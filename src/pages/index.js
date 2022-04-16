import "./index.css";

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import {
  buttonOpenPopupEditProfile,
  openPopupAvatar,
  formProfile,
  inputProfileName,
  inputProfileSubname,
  buttonAddPopupProfile,
  formAddCard,
  formAvatar,
  validationConfig,
} from "../uitls/constants.js";

let userId;

Promise.all([api.getProfile(), api.getInitialCards()])
  .then((res) => {
    userInfo.setUserInfo(res[0].name, res[0].about, res[0].avatar);
    userId = res[0]._id;
    cardsList.renderItems({
      data: res[1],
      renderer: (res) => {
        const cardItem = createCard({
          name: res.name,
          link: res.link,
          likes: res.likes,
          userId: userId,
          ownerId: res.owner._id,
          id: res._id,
        });
        cardsList.addItem(cardItem);
      },
    });
  })
  .catch((err) => {
    console.log(err);
  });

const formValidatorInfo = new FormValidator(validationConfig, formProfile);
const formValidatorCard = new FormValidator(validationConfig, formAddCard);
const formValidatorAvatar = new FormValidator(validationConfig, formAvatar);

formValidatorInfo.enableValidation();
formValidatorCard.enableValidation();
formValidatorAvatar.enableValidation();

const userInfo = new UserInfo({
  userNameProfile: ".profile__title",
  userSubnameProfile: ".profile__subtitle",
  userAvatarProfile: ".profile__avatar",
});

const popupWithFormEditProfile = new PopupWithForm(".popup_profile", {
  submitFormHandler: (inputValues) => {
    popupWithFormEditProfile.renderLoading(true);;
    api
      .editProfile(inputValues.name, inputValues.profession)
      .then((res) => {
        userInfo.setUserInfo(res.name, res.about, res.avatar);
      })
      .then(() => {
        popupWithFormEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithFormEditProfile.renderLoading(false);;
      });
  },
});

buttonOpenPopupEditProfile.addEventListener("click", () => {
  const { name, subname } = userInfo.getUserInfo();
  popupWithFormEditProfile.open();

  inputProfileName.value = name;
  inputProfileSubname.value = subname;

  formValidatorInfo.resetValid();
  formValidatorInfo.toggleButtonState();
});

popupWithFormEditProfile.setEventListeners();

const popupWithFormAddCard = new PopupWithForm(".popup_card-photo", {
  submitFormHandler: (inputValues) => {
    popupWithFormAddCard.renderLoading(true);
    api
      .addCard(inputValues.place, inputValues.link)
      .then((res) => {
        const cardItem = createCard({
          name: res.name,
          link: res.link,
          likes: res.likes,
          userId: userId,
          ownerId: res.owner._id,
          id: res._id,
        });
        cardsList.addItem(cardItem);
      })
      .then(() => {
        popupWithFormAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithFormAddCard.renderLoading(false);
      });
  },
});

buttonAddPopupProfile.addEventListener("click", () => {
  formValidatorCard.toggleButtonState();
  popupWithFormAddCard.open();
});

popupWithFormAddCard.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_size-photo");

function sizePhoto(name, link) {
  popupWithImage.open(name, link);
}

popupWithImage.setEventListeners();

function createCard(data) {
  const card = new Card(
    data,
    ".template",
    sizePhoto,
    (id) => {
      cardConfirmDelete.open();
      cardConfirmDelete.changeSubmitHandler(() => {
        api
          .deleteConfirmCard(id)
          .then((res) => {
            card.handleDeleteCard();
            cardConfirmDelete.close();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    (id) => {
      if (card.isLiked()) {
        api
          .deleteLikes(id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .addLikes(id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );
  const cardItem = card.generateCard();
  return cardItem;
}

const cardsList = new Section(".photo-grid");

const cardConfirmDelete = new PopupWithForm(".popup_delete_card", {
  submitFormHandler: () => {
    api.deleteConfirmCard(id);
  },
});

cardConfirmDelete.setEventListeners();

const changingAvatarProfile = new PopupWithForm(".popup_change-avatar", {
  submitFormHandler: (inputValues) => {
    changingAvatarProfile.renderLoading(true);
    api
      .updateAvatar(inputValues.avatar)
      .then((res) => {
        userInfo.setUserInfo(res.name, res.about, res.avatar);
      })
      .then(() => {
        changingAvatarProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        changingAvatarProfile.renderLoading(false);
      });
  },
});

changingAvatarProfile.setEventListeners();

openPopupAvatar.addEventListener("click", () => {
  changingAvatarProfile.open();
  formValidatorAvatar.toggleButtonState();
});
