import './index.css';
import { Card } from '../components/Card.js';
import { FormValidation} from '../components/FormValidation.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';

import {
  profilEditBtn,
  inputName,
  inputDescription,
  formPopupProfileEdit,
  formPopupAddMesto,
  cardAddBtn,
  cardListSelector,
  formValidationConfig,
  avatarEditBtn,
  formPopupChangeAvatar
} from '../utils/constants.js'



// -------Инстанцирования класса Api -----------------------

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: '1eb1009b-e789-45d3-b8d6-70ecf75cef41',
    'Content-Type': 'application/json'
  }
});


// Отображение данных с сервера на странице
api.getUserData().then(data => {
  const[userInfoData, initialCards] = data;
  userInfo.setUserInfo({name: userInfoData.name, description: userInfoData.about, userId: userInfoData._id});
  userInfo.setAvatar({newAvatarLink: userInfoData.avatar});
  cardList.renderItems(initialCards.reverse());
}).catch(err => console.log(`Ошибка: ${err}`))


// --------------------------------------Валидация форм------------------------------------

// добавление валидации формы для редактирования профиля
const formProfileEditValidation = new FormValidation(formValidationConfig, formPopupProfileEdit);
formProfileEditValidation.enableValidation();

// добавление валидации формы для добавляения новой карточки
const formAddMestoValidation = new FormValidation(formValidationConfig, formPopupAddMesto);
formAddMestoValidation.enableValidation();



// добавление валидации формы для редактирования аватара
const formChangeAvatarValdation = new FormValidation(formValidationConfig, formPopupChangeAvatar);
formChangeAvatarValdation.enableValidation();



// -------------Инстанцирования класса PopupWithForm для редактирования аватарки------------------

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_type_change-avatar',
  callbackFunction: (formList) => {
    popupEditAvatar.renderLoading(true);
    api.setUserAvatar({avatar: formList.link})
    .then((data) => {
      userInfo.setAvatar({newAvatarLink: data.avatar});
      popupEditAvatar.closePopup();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => popupEditAvatar.renderLoading(false))

  }
})
popupEditAvatar.setEventListeners();





// -------------------------------------Данные с профиля-----------------------------------

const userInfo = new UserInfo({profileName: '.profile__name', profileTitle: '.profile__subtitle', profileAvatar: '.profile__avatar-image'})



// ------------------------------------Редактирование профиля------------------------------

//  Инстанцирования класса PopupWithForm для редактирование профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  callbackFunction: (formList) => {
    popupEditProfile.renderLoading(true);
    api.setUserInfo({name: formList.name, about: formList.description})
    .then((data) => {
      userInfo.setUserInfo({name: data.name, description: data.about})
      popupEditProfile.closePopup();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => popupEditProfile.renderLoading(false))
  }
});

popupEditProfile.setEventListeners();

// ----------------------------------Попап для добавление новых карточек--------------------

// Инстанцирования класса PopupWithForm для доавбления новых карточек
const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_add-item',
  callbackFunction: (formList) => {
    popupAddCard.renderLoading(true)
    api.setAddCard(formList).then((data) => {
      cardList.addItem(data);
      popupAddCard.closePopup();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => popupAddCard.renderLoading(false))
  }
})

popupAddCard.setEventListeners();




// -------------------------------Рендеринг карточек на страницу----------------------------

// Инстанцирование класса Card
function createCard(item) {
  const card = new Card({
    card: item,
    templateSelector: '#cards-template',
    hundleCardClick: hundleCardClick,
    userId: userInfo.getUserId(),
    handleLikeBtn: () => {
      if(!card.isLiked) {
        api.setLikeCard(card.getCardId()).then((cardData) => {
          card.addLikeCard()
          card.updateCounterLike(cardData.likes)
        }).catch(err => console.log(`Ошибка: ${err}`))
      } else {
        api.deleteLikeCard(card.getCardId()).then((cardData) => {
          card.removeLikeCard()
          card.updateCounterLike(cardData.likes)
        }).catch(err => console.log(`Ошибка: ${err}`))
      }
    },
    handleRemoveCard: () => {
      const cardId = card.getCardId()
      popupwithConfirmation.openPopup();
      popupwithConfirmation.confirmDeletion(() => {
        api.removeCard(cardId).then(() => {
          card.removeCard();
          popupwithConfirmation.closePopup()
        }).catch(err => console.log(`Ошибка: ${err}`))
      })

    }
  });
  return card.generateCard();
}


// Функция для открытия попапа с картинкой
function hundleCardClick(link, name) {
  const imagePopup = new PopupWithImage('.popup_type_open-image');
  imagePopup.openPopup(link, name)
  imagePopup.setEventListeners();
}

// Инстанцирование класса Section
const cardList = new Section({
  data: [],
  renderer: (item) => {
    // добавление сгенерированной карточки
    cardList.setItem(createCard(item))
  }
}, cardListSelector)

// Инстанцирование класса PopupWithConfirmation
const popupwithConfirmation = new PopupWithConfirmation('.popup_type_confirm-deletion');
popupwithConfirmation.setEventListeners();

// -----------Кнопки открытия попап окон для редактирования профиля и добавления новой карточеи-----------------


// Кнопка открытия popup для редактирования профиля
profilEditBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Получение данных пользователя
  const userData = userInfo.getUserInfo();
  // Присваивание введенных данных в Input
  inputName.value = userData.name;
  inputDescription.value = userData.description;

  // сброс валидации при открытии
  formProfileEditValidation.resetValidationErrors();
  formProfileEditValidation.resetSubmitButton();

  popupEditProfile.openPopup();
})

// кнопка открытия попап окна для добавления карточки
cardAddBtn.addEventListener('click', () => {
  // сброс валидации при открытии
  formAddMestoValidation.resetSubmitButton();
  formAddMestoValidation.resetValidationErrors();

  popupAddCard.openPopup();
});

// кнопка открытия попап окна редактирования автара
avatarEditBtn.addEventListener('click', ()=>{
  formChangeAvatarValdation.resetValidationErrors();
  popupEditAvatar.openPopup();
})


