import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formSelector = this._popup.querySelector('.popup__form_type_confirm');
  }

  confirmDeletion(action){
    this._handleDeleteCard = action
  }


  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener('submit', (e)=> {
      e.preventDefault();
      this._handleDeleteCard();
    })
  }
}
