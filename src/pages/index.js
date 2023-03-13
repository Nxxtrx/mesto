import './index.css';
import { Card } from '../components/Card.js';
import { FormValidation} from '../components/FormValidation.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

import {
  profilEditBtn,
  inputName,
  inputDescription,
  formPopupProfileEdit,
  formPopupAddMesto,
  cardAddBtn,
  cardListSelector,
  initialCards,
  formValidationConfig
} from '../utils/constants.js'


// --------------------------------------Валидация форм------------------------------------

// добавление валидации формы для редактирования профиля
const formProfileEditValidation = new FormValidation(formValidationConfig, formPopupProfileEdit);
formProfileEditValidation.enableValidation();

// добавление валидации формы для добавляения новой карточки
const formAddMestoValidation = new FormValidation(formValidationConfig, formPopupAddMesto);
formAddMestoValidation.enableValidation();


// -------------------------------------Данные с профиля-----------------------------------

const userInfo = new UserInfo({profileName: '.profile__name', profileTitle: '.profile__subtitle'})



// ------------------------------------Редактирование профиля------------------------------

//  Инстанцирования класса PopupWithForm для редактирование профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  callbackFunction: (formList) => {
    userInfo.setUserInfo(formList);
    popupEditProfile.closePopup();
  }
});
popupEditProfile.setEventListeners();

// ----------------------------------Попап для добавление новых карточек--------------------

// Инстанцирования класса PopupWithForm для доавбления новых карточек
const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_add-item',
  callbackFunction: (formList) => {
    cardList.addItem(formList);
    popupAddCard.closePopup();
  }
})

popupAddCard.setEventListeners();


// -------------------------------Рендеринг карточек на страницу----------------------------

// Инстанцирование класса Card
function createCard(item) {
  const card = new Card(item, '#cards-template', hundleCardClick);
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
  data: initialCards.reverse(),
  renderer: (item) => {
    // добавление сгенерированной карточки
    cardList.setItem(createCard(item));
  }
}, cardListSelector)

cardList.renderItems();


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


