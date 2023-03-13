import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor({popupSelector, callbackFunction}){
    super(popupSelector);
    this._callbackSubmitform = callbackFunction;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__profile-edit'));
  }

  // получение данных с инпута
  _getInputValues() {
    this._formList = {};
    this._inputList.forEach((item) => {
      this._formList[item.name] = item.value
    })
    return this._formList;
  }

  // добавление слушателя на кнопку сабмит для добавления новой карточки
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._callbackSubmitform(this._getInputValues());
    })
  }

  // закрытие попап окна
  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }
}
