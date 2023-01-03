let page = document.querySelector('.page');
let closeButtom = page.querySelector('.popup__close');
let popup = page.querySelector('.popup');
let editProfile = page.querySelector('.profile__edit-button');
let popupOpened = page.querySelector('.popup_opened');
let profileName = page.querySelector('.profile__name');
let profileDescription = page.querySelector('.profile__subtitle');
let inputName = page.querySelector('.popup__profile-edit_type_name');
let inputDescription = page.querySelector('.popup__profile-edit_type_description');
let formPopup = page.querySelector('.popup__form')

function closePopup() {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
  } else {
    popup.classList.add('popup_opened');
  }
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
};

const editPopup = page.querySelector('.popup__edit');

closeButtom.addEventListener('click', closePopup);
editProfile.addEventListener('click', closePopup);


function submitPopup(e) {
  e.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup();
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
  cardList.append(cardsElement);
});

// popup окно добавления карточки

const addMestoPopup = page.querySelector('.popup__add-item');
const addCards = page.querySelector('.profile__add-button');
