const page = document.querySelector('.page');
const closeButtom = page.querySelectorAll('.popup__close');
const popup = page.querySelectorAll('.popup');
const editProfile = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__subtitle');
const inputName = page.querySelector('.popup__profile-edit_type_name');
const inputDescription = page.querySelector('.popup__profile-edit_type_description');
const formPopup = page.querySelector('.popup__form')

// Функция открытия и закрытия попап окон

function closePopup({modal}) {
    popup.forEach( (item) => {
      if (item.classList === modal.classList)  {
        item.classList.add('popup_opened');
      } else {
        item.classList.remove('popup_opened');
      }
    });
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
};

// добавление кнопок для открытия и закрытия попап окна для редактирования профиля

closeButtom.forEach ((elem) => {
  elem.addEventListener('click', () => {closePopup({modal: popup})});
});
const editPopup = page.querySelector('.popup__edit');
editProfile.addEventListener('click', () => {closePopup({modal: editPopup})});

// функция для сохранения введеных данных для редактирования профиля

function submitPopup(e) {
  e.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup({modal: popup})
};

formPopup.addEventListener('submit', submitPopup);


// Добавление массива со стандартными карточками

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Добавление карточек на страницу из массива

const cardsTemplate = page.querySelector('#cards-template').content;
const cardList = page.querySelector('.cards__list');

initialCards.forEach( (item) => {
  const cardsElement = cardsTemplate.querySelector('.cards__item').cloneNode(true);
  cardsElement.querySelector('.cards__subtitle').textContent = item.name;
  cardsElement.querySelector('.cards__image').src = item.link;
  cardsElement.querySelector('.cards__image').alt = item.name;

  cardList.append(cardsElement);
});


// popup окно добавления карточки

const addMestoPopup = page.querySelector('.popup__add-item');
const addCards = page.querySelector('.profile__add-button');
addCards.addEventListener('click', () => {closePopup({modal: addMestoPopup})});

// Функция добавления карточки

function addCardsPopup(e) {
  e.preventDefault();

  const cardsElement = cardsTemplate.querySelector('.cards__item').cloneNode(true);
  const addImageInput = page.querySelector('.popup__profile-edit_type_src');
  const addTitleInput = page.querySelector('.popup__profile-edit_type_title');

  cardsElement.querySelector('.cards__subtitle').textContent = `${addTitleInput.value}`;
  cardsElement.querySelector('.cards__image').src = `${addImageInput.value}`;
  cardsElement.querySelector('.cards__image').alt = `${addTitleInput.value}`;

  cardList.prepend(cardsElement);

  closePopup({modal: popup});

  addImageInput.value = '';
  addTitleInput.value = '';

  // лайк для добавленных карт
  cardList.querySelector('.cards__like-btn').addEventListener('click', function (event) {
    event.target.classList.toggle('cards__like-btn_active');
  });

  // удаление добавленных карт
  cardList.querySelectorAll('.cards__delete-btn').forEach ((item) => {
    item.addEventListener('click', () => {item.parentElement.remove();});
  });

  // открытие добавленных карточек
  page.querySelectorAll('.cards__image').forEach ((item) => {
    item.addEventListener('click', () => {
      popupImageOpen.querySelector('.popup__image').src = item.getAttribute('src');
      popupImageOpen.querySelector('.popup__image-title').textContent = item.parentElement.querySelector('.cards__subtitle').textContent;
      closePopup({modal: popupImageOpen});
    });
  });
};

const popupSaveImage = page.querySelector('.popup__form_type_add').addEventListener('submit', addCardsPopup);

// лайки для карточек с массива

const likeButton = cardList.querySelectorAll('.cards__like-btn');

likeButton.forEach ((item) => {
  item.addEventListener('click', function (event) {
    event.target.classList.toggle('cards__like-btn_active');
  });
});

// Удаление карточек с массива

const deleteButton = cardList.querySelectorAll('.cards__delete-btn');

deleteButton.forEach ((item) => {
  item.addEventListener('click', () => {item.parentElement.remove();});
});

// Открытие попап с картинкой

const popupCards = page.querySelectorAll('.cards__image');
const popupImageOpen = page.querySelector('.popup__open-image');

popupCards.forEach ((item) => {
  item.addEventListener('click', () => {
    popupImageOpen.querySelector('.popup__image').src = item.getAttribute('src');
    popupImageOpen.querySelector('.popup__image-title').textContent = item.parentElement.querySelector('.cards__subtitle').textContent;
    closePopup({modal: popupImageOpen});
  });
});
