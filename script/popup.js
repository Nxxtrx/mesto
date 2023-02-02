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
const popupImageItem = page.querySelector('.popup_type_open-image');

// картинка и описание попапа открытия картинки
const popupImageImg = popupImageItem.querySelector(".popup__image");
const popupImageTitle = popupImageItem.querySelector(".popup__image-title");

// Функция открытия popup окон
function openPopup (modal) {
  modal.classList.add('popup_opened');
  // Добавление слушателя для закрытия попап окна по кнопке Esc
  document.addEventListener('keydown', closePopupForKeyboard);

  // page.addEventListener('click', closePopupByOverlay);
};

// Функция для закрытия попап окна по кнопке на клавиатуре
function closePopupForKeyboard(evt) {
  if (evt.key === 'Escape') {
    const popup = page.querySelectorAll('.popup')
    popup.forEach((item) => {
      closePopup(item)
    })
  }
}

// function closePopupByOverlay(evt) {
//   const popup = page.querySelector('.popup')
//   console.log(evt.target)
//   console.log(!evt.target.closest('.popup__container'))
//   if(!evt.target.closest('.popup__container')) {
//     closePopup(popup)
//   }
// }

// Функция закрытия popup окна
function closePopup(modal) {
  modal.classList.remove('popup_opened');
  // Удаления слушателя для закрытия попап окна по кнопке Esc
  document.removeEventListener('keydown', closePopupForKeyboard)
};

// Функция открытия попапа для редактирования профиля с сохранением полей
function openProfilePopup (modal) {
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
});

// функция для сохранения введеных данных для редактирования профиля
function submitPopupEdit(e) {
  e.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup(popupEdit);
};

// Кнопка сохранения введеных данных для редактирования профиля
formPopupProfileEdit.addEventListener('submit', submitPopupEdit);



// Добавление карточек на страницу

// шаблон карточки
const cardTemplate = page.querySelector('#cards-template').content;

// список карточек
const cardContainer = page.querySelector('.cards__list');

// Функция создания карточек
function createCard(item) {

  // клонирование карточки
  const cardSample = cardTemplate.querySelector(".cards__item").cloneNode(true);

  const cardImage = cardSample.querySelector(".cards__image");

  cardSample.querySelector(".cards__subtitle").textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;


  // Лайки исправленные
  const likeBtn = cardSample.querySelector(".cards__like-btn");

  function pressingLike() {
    likeBtn.classList.toggle('cards__like-btn_active');
  };

  likeBtn.addEventListener('click', pressingLike);


  // удаление добавленных карт
  const cardDeleteBtn = cardSample.querySelector(".cards__delete-btn");

  function deleteCard() {
    cardDeleteBtn.closest('.cards__item').remove();
  }

  cardDeleteBtn.addEventListener('click', deleteCard);


  // функция открытия картинки
  function openImage() {
    popupImageImg.src = item.link;
    popupImageImg.alt = item.name;
    popupImageTitle.textContent = item.name;
    openPopup(popupImageItem);
  };

  cardImage.addEventListener('click', openImage);

  return cardSample;
};


// Добавление карточек через массив
initialCards.forEach( (item) => {
  cardContainer.append(createCard(item))
});


// popup окно добавления карточки

const cardAddBtn = page.querySelector('.profile__add-button');
const imagePopupInput = page.querySelector(".popup__profile-edit_type_src");
const titlePopupInput = page.querySelector(".popup__profile-edit_type_title");

// кнопка открытия попап окна для добавления карточки
cardAddBtn.addEventListener('click', () => {
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

  cardContainer.prepend(createCard(cardArr[0]));

  // очистка формы
  imagePopupInput.value = '';
  titlePopupInput.value = '';

  closePopup(popupAddItem);
});


// Валидация формы

const form = document.querySelector('.popup__form');
const formInput = form.querySelector('.popup__profile-edit');


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__profile-edit_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__profile-edit_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  };

};

const setEventListerer = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__profile-edit'));
  const buttonSubmit = formElement.querySelector('.popup__btn');
  toggleButtonState(inputList, buttonSubmit);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonSubmit);
    });
  });
};

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault;
    });
    const fieldset = formElement.querySelector('.popup__form-set');
      setEventListerer(fieldset);
  });
};

enableValidation();

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__btn_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('popup__btn_inactive');
    buttonElement.disabled = false;
  };

};




