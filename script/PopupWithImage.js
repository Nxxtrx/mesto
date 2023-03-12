import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._popupImageElement = this._popup.querySelector('.popup__image');
    this._popupTitleElement = this._popup.querySelector('.popup__image-title');
  }

  // добавление ссылки и описания для открытия попапа с картинкой
  openPopup(link, name) {
    this._popupImageElement.src = link;
    this._popupImageElement.alt = name;
    this._popupTitleElement.textContent = name;

    super.openPopup();
  }
}
