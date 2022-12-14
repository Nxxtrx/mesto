let page = document.querySelector('.page');
let closeButtom = page.querySelector('.popup__close');
let popup = page.querySelector('.popup');
let editProfile = page.querySelector('.profile__edit-button');
let popupOpened = page.querySelector('.popup_opened');
let profileName = page.querySelector('.profile__name');
let profileDescription = page.querySelector('.profile__subtitle');
let submitButton = page.querySelector('.popup__btn-submit');



function closePopup(e) {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
  } else {
    popup.classList.add('popup_opened');
  }

  let inputName = page.querySelector('.popup__profile-name');
  let inputDescription = page.querySelector('.popup__profile-description');

  profileName.textContent = `${inputName.value}`;
  profileDescription.textContent = `${inputDescription.value}`;
  e.preventDefault();
};

submitButton.addEventListener('click', closePopup);
closeButtom.addEventListener('click', closePopup);
editProfile.addEventListener('click', closePopup);
