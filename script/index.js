import { Card } from './Card.js';
import { initialCards } from './cards.js';
import { FormValidation} from './FormValidation.js';
import { formValidationConfig } from './formValidationConfig.js';
import PopupWithForm from './PopupWithForm.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import PopupWithImage from './PopupWithImage.js';

import {
  profilEditBtn,
  inputName,
  inputDescription,
  formPopupProfileEdit,
  formPopupAddMesto,
  cardAddBtn,
  cardListSelector
} from '../utils/constants.js'

// добавление валидации формы для редактирования профиля
const formProfileEditValidation = new FormValidation(formValidationConfig, formPopupProfileEdit);
formProfileEditValidation.enableValidation();

// функция валидации формы для добавляения новой карточки
const formAddMestoValidation = new FormValidation(formValidationConfig, formPopupAddMesto);
formAddMestoValidation.enableValidation();


// Данные с профиля
const userInfo = new UserInfo({profileName: '.profile__name', profileTitle: '.profile__subtitle'})

//  Попап для редактирование профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  callbackFunction: (formList) => {
    popupEditProfile.closePopup();
    userInfo.setUserInfo(formList);
  }
});

popupEditProfile.setEventListeners();


// Попап для добавление новых карточек
const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_add-item',
  callbackFunction: (formList) => {
    cardList.addItem(formList)
    popupAddCard.closePopup();
  }
})
popupAddCard.setEventListeners();


// Функция для открытия попапа с картинкой
function hundleCardClick(link, name) {
  const imagePopup = new PopupWithImage('.popup_type_open-image');
  imagePopup.openPopup(link, name)
  imagePopup.setEventListeners();
}

// добавление карточки с массива InitialCards
const cardList = new Section({
  data: initialCards.reverse(),
  renderer: (item) => {
    const card = new Card(item, '#cards-template', hundleCardClick);
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
  }
}, cardListSelector)

cardList.renderItems();


// Кнопка открытия popup для редактирования профиля
profilEditBtn.addEventListener('click', (e) => {
  e.preventDefault();
  inputName.value = userInfo.getUserInfo().name;
  inputDescription.value = userInfo.getUserInfo().description;
  popupEditProfile.openPopup();
})

// кнопка открытия попап окна для добавления карточки
cardAddBtn.addEventListener('click', () => {
  formAddMestoValidation.resetSubmitButton();
  popupAddCard.openPopup();
});


