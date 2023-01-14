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
};

// Функция закрытия popup окна
function closePopup(modal) {
  modal.classList.remove('popup_opened');
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

  cardSample.querySelector(".cards__subtitle").textContent = item.name;
  cardSample.querySelector(".cards__image").src = item.link;
  cardSample.querySelector(".cards__image").alt = item.name;


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
  const popupCardsImage = cardSample.querySelector(".cards__image");
  const imageCardsTitle = cardSample.querySelector(".cards__subtitle");

  function openImage() {
    popupImageImg.src = popupCardsImage.getAttribute("src");
    popupImageTitle.textContent = imageCardsTitle.textContent;
    openPopup(popupImageItem);
  };

  popupCardsImage.addEventListener('click', openImage);

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
  imagePopupInput.value = '';
  titlePopupInput.value = '';
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
