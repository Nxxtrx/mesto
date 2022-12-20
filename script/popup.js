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

closeButtom.addEventListener('click', closePopup);
editProfile.addEventListener('click', closePopup);


function submitPopup(e) {
  e.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  closePopup();
};

formPopup.addEventListener('submit', submitPopup);

