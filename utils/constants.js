const page = document.querySelector('.page');

export const popupImageItem = document.querySelector('.popup_type_open-image');
export const popupImage = popupImageItem.querySelector('.popup__image');
export const popupTitle = popupImageItem.querySelector('.popup__image-title');

// кнопка открытия попап окна для редактирования профиля
export const profilEditBtn = page.querySelector('.profile__edit-button');

// поля ввода для редактирования профиля
export const inputName = page.querySelector('.popup__profile-edit_type_name');
export const inputDescription = page.querySelector('.popup__profile-edit_type_description');

// форма папапа редактирования профиля
export const formPopupProfileEdit = page.querySelector('.popup__form_type_edit');

// форма для добавления новой карточки
export const formPopupAddMesto = page.querySelector('.popup__form_type_add');

// popup окно добавления карточки
export const cardAddBtn = page.querySelector('.profile__add-button');


export const cardListSelector = ".cards__list";
