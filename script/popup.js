const page = document.querySelector('.page');
const buttonCloseList = page.querySelectorAll('.popup__close');
const editProfile = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__subtitle');
const inputName = page.querySelector('.popup__profile-edit_type_name');
const inputDescription = page.querySelector('.popup__profile-edit_type_description');
const formPopupEdit = page.querySelector('.popup__form');

const popupEdit = page.querySelector('.popup_type_edit');
const popupAddItem = page.querySelector('.popup_type_add-item');
const popupImageItem = page.querySelector('.popup_type_open-image');


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

// Кнопки закрытия popup окна
buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
});

// Кнопка открытия popup для редактирования профиля
editProfile.addEventListener('click', () => {openProfilePopup(popupEdit)});

// функция для сохранения введеных данных для редактирования профиля
function submitPopupEdit(e) {
  e.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup(popupEdit);
};

// Кнопка сохранения введеных данных для редактирования профиля
formPopupEdit.addEventListener('submit', submitPopupEdit);

// Добавление массива со стандартными карточками


// Добавление карточек на страницу из массива

const cardsTemplate = page.querySelector('#cards-template').content;
const cardList = page.querySelector('.cards__list');
const popupImg = popupImageItem.querySelector(".popup__image");
const popupTitle = popupImageItem.querySelector(".popup__image-title");

// Функция создания карточек
function createCard(item) {
  const cardsElement = cardsTemplate.querySelector(".cards__item").cloneNode(true);

  console.log(item.name);
  cardsElement.querySelector(".cards__subtitle").textContent = item.name;
  cardsElement.querySelector(".cards__image").src = item.link;
  cardsElement.querySelector(".cards__image").alt = item.name;

  // Лайки исправленные
  const likeBtn = cardsElement.querySelector(".cards__like-btn");
  function like() {
    likeBtn.classList.toggle('cards__like-btn_active');
  };
  likeBtn.addEventListener('click', like);


  // удаление добавленных карт
  const cardDeleteBtn = cardsElement.querySelector(".cards__delete-btn");
  function deleteCard() {
    cardDeleteBtn.closest('.cards__item').remove();
  }
  cardDeleteBtn.addEventListener('click', deleteCard);

  const popupCardsImageBtn = cardsElement.querySelector(".cards__image");
  const imageCardsTitle = cardsElement.querySelector(".cards__subtitle");

  function openImage() {
    popupImg.src = popupCardsImageBtn.getAttribute("src");
    popupTitle.textContent = imageCardsTitle.textContent;
    openPopup(popupImageItem);
  };

  popupCardsImageBtn.addEventListener('click', openImage);


  return cardsElement;

};


// Добавление карточек через массив
initialCards.forEach( (item) => {
  cardList.append(createCard(item))
});


// popup окно добавления карточки
const addMestoPopup = page.querySelector('.popup_type_add-item');
const addCards = page.querySelector('.profile__add-button');
addCards.addEventListener('click', () => {openPopup(popupAddItem)});

page.querySelector('.popup__form_type_add').addEventListener('submit', (e) => {
  e.preventDefault();
  const addImageInput = page.querySelector(".popup__profile-edit_type_src");
  const addTitleInput = page.querySelector(".popup__profile-edit_type_title");
  const item = [
    {
      name: `${addTitleInput.value}`,
      link: `${addImageInput.value}`
    }
  ];

  cardList.prepend(createCard(item[0]));

  addImageInput.value = '';
  addTitleInput.value = '';

  closePopup(popupAddItem);
});
