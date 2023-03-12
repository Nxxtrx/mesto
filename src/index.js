import './pages/index.css';
import { Card } from './components/Card.js';
import { FormValidation} from './components/FormValidation.js';
import PopupWithForm from './components/PopupWithForm.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import PopupWithImage from './components/PopupWithImage.js';

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
} from './utils/constants.js'

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


