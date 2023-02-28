import {Card} from './Card.js';
import { initialCards } from './cards.js';
import { FormValidation, formValidationConfig} from './FormValidation.js';


const page = document.querySelector('.page');

// Кнопки закрытия попап окон
const buttonCloseList = page.querySelectorAll('.popup__close');

// кнопка открытия попап окна для редактирования профиля
const profilEditBtn = page.querySelector('.profile__edit-button');

// имя и описание на странице
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__subtitle');

// поля ввода для редактирования профиля
const inputName = page.querySelector('.popup__profile-edit_type_name');
const inputDescription = page.querySelector('.popup__profile-edit_type_description');

// форма папапа редактирования профиля
const formPopupProfileEdit = page.querySelector('.popup__form_type_edit');

// попапы
const popupEdit = page.querySelector('.popup_type_edit');
const popupAddItem = page.querySelector('.popup_type_add-item');
export const popupImageItem = page.querySelector('.popup_type_open-image');


// Функция открытия popup окон
function openPopup (modal) {
  modal.classList.add('popup_opened');
  // Добавление слушателя для закрытия попап окна по кнопке Esc
  document.addEventListener('keydown', closePopupForKeyboard);
  // добавление слушателя для закрытия попап по клику на оверлей
  page.addEventListener('mousedown', closePopupByOverlay);
}

// Функция закрытия popup окна
function closePopup(modal) {
  modal.classList.remove('popup_opened');
  // Удаления слушателя для закрытия попап окна по кнопке Esc
  document.removeEventListener('keydown', closePopupForKeyboard);
  // Удаления слушателя для закрытия попап по клику на оверлей
  page.removeEventListener('mousedown', closePopupByOverlay);
}

// Функция для закрытия попап окна по кнопке на клавиатуре
function closePopupForKeyboard(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = page.querySelector('.popup_opened');
      closePopup(popupOpened)
  }
}

// функция для закрытия попап по клику на оверлей
function closePopupByOverlay(evt) {
  const popupOpened = page.querySelector('.popup_opened');
  if(!evt.target.closest('.popup__overlay')) {
    closePopup(popupOpened);
  }
}

// функция сброса валидации
function resetValidation(modal) {
  const inputPopupList = modal.querySelectorAll('.popup__profile-edit');
  const inputErrorList = modal.querySelectorAll('.popup__input-error');

  inputPopupList.forEach((item) => {
    item.classList.remove('popup__profile-edit_type_error');
  })

  inputErrorList.forEach((item) =>{
    item.classList.remove('popup__input-error_active');
    item.textContent = '';
  })

  const buttonSubmit = modal.querySelector('.popup__btn');
  buttonSubmit.disabled = false;
  buttonSubmit.classList.remove('popup__btn_inactive');
}

// Функция открытия попапа для редактирования профиля с сохранением полей
function openProfilePopup (modal) {
  // сброс валидации при открытии попап окна
  resetValidation(modal)
  // получение сохраненных данных
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  openPopup(modal);
}

// Кнопка открытия popup для редактирования профиля
profilEditBtn.addEventListener('click', () => {openProfilePopup(popupEdit)});

// Кнопки закрытия popup окна
buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
})

// функция для сохранения введеных данных для редактирования профиля
function submitPopupEdit(e) {
  e.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup(popupEdit);
}

// Кнопка сохранения введеных данных для редактирования профиля
formPopupProfileEdit.addEventListener('submit', submitPopupEdit);



// popup окно добавления карточки
const cardAddBtn = page.querySelector('.profile__add-button');
const imagePopupInput = page.querySelector(".popup__profile-edit_type_src");
const titlePopupInput = page.querySelector(".popup__profile-edit_type_title");

// кнопка открытия попап окна для добавления карточки
cardAddBtn.addEventListener('click', () => {
  // сбрасывание кнопки
  const buttonSubmitForAddItem = popupAddItem.querySelector('.popup__btn');
  buttonSubmitForAddItem.disabled = true;
  buttonSubmitForAddItem.classList.add('popup__btn_inactive');

  openPopup(popupAddItem);
});

// Сохранение данных внесенных в форму
page.querySelector('.popup__form_type_add').addEventListener('submit', (e) => {
  e.preventDefault();

  // Создание массива с инпутов ввода для названия и ссылки картинки
  const cardArr = [
    {
      name: `${titlePopupInput.value}`,
      link: `${imagePopupInput.value}`
    }
  ];

  // Добавление карточки через форму
  const card = new Card(cardArr[0], '#cards-template', openPopup);
  const cardElement = card.generateCard();
  document.querySelector('.cards__list').prepend(cardElement);


  // очистка формы
  imagePopupInput.value = '';
  titlePopupInput.value = '';

  closePopup(popupAddItem);
})

// добавление карточек на страницу с обьекта
initialCards.forEach((item)=> {
  const card = new Card(item, '#cards-template', openPopup);
  const cardElement = card.generateCard();
  document.querySelector('.cards__list').append(cardElement);
})

// добавление валидации форм
const formList = document.querySelectorAll('.popup__form');
formList.forEach((item) => {
  const popupValid = new FormValidation(formValidationConfig, item);
  popupValid.enableValidation();
})
