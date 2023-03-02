import { Card } from './Card.js';
import { initialCards } from './cards.js';
import { FormValidation} from './FormValidation.js';
import { formValidationConfig } from './formValidationConfig.js';

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

// форма для добавления новой карточки
const formPopupAddMesto = page.querySelector('.popup__form_type_add');

// попапы
const popupEdit = page.querySelector('.popup_type_edit');
const popupAddItem = page.querySelector('.popup_type_add-item');

// контейнер для карточек
const cardContainer = page.querySelector('.cards__list');

// popup окно добавления карточки
const cardAddBtn = page.querySelector('.profile__add-button');
const imagePopupInput = page.querySelector(".popup__profile-edit_type_src");
const titlePopupInput = page.querySelector(".popup__profile-edit_type_title");

// добавление валидации формы для редактирования профиля
const formProfileEditValidation = new FormValidation(formValidationConfig, formPopupProfileEdit);
formProfileEditValidation.enableValidation();

// функция валидации формы для добавляения новой карточки
const formAddMestoValidation = new FormValidation(formValidationConfig, formPopupAddMesto);
formAddMestoValidation.enableValidation();

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
  if(!evt.target.closest('.popup__overlay')) {
    const popupOpened = page.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// Функция открытия попапа для редактирования профиля с сохранением полей
function openProfilePopup (modal) {
  // сброс валидации при открытии попап окна
  formProfileEditValidation.resetValidationErrors();
  // Сброс кнопки submit
  formProfileEditValidation.resetSubmitButton();
  // получение сохраненных данных
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  openPopup(modal);
}

// функция для сохранения введеных данных для редактирования профиля
function submitPopupEdit(e) {
  e.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup(popupEdit);
}

// функция добавления карточек
function createCard(item) {
  const card = new Card(item, '#cards-template', openPopup);
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
}

// добавление карточек на страницу через класс с обьекта initialCards
initialCards.forEach((item)=> {
  createCard(item);
})

// Кнопки закрытия popup окна
buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
})

// Сохранение данных внесенных в форму
formPopupAddMesto.addEventListener('submit', (e) => {
  e.preventDefault();

  // Создание массива с инпутов ввода для названия и ссылки картинки
  const cardArr = [
    {
      name: `${titlePopupInput.value}`,
      link: `${imagePopupInput.value}`
    }
  ];

  // Добавление карточки через класс в форме
  createCard(cardArr[0])

  // очистка формы
  formPopupAddMesto.reset();

  closePopup(popupAddItem);
})

// Кнопка открытия popup для редактирования профиля
profilEditBtn.addEventListener('click', () => {openProfilePopup(popupEdit)});

// Кнопка сохранения введеных данных для редактирования профиля
formPopupProfileEdit.addEventListener('submit', submitPopupEdit);

// кнопка открытия попап окна для добавления карточки
cardAddBtn.addEventListener('click', () => {
  formAddMestoValidation.resetSubmitButton();
  openPopup(popupAddItem);
});
