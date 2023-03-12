export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close');
  }

  setEventListeners() {
    // добавление слушателя для закрытия попап по клику на оверлей
    this._popup.addEventListener('mousedown', (evt)=>{
      if(!evt.target.closest('.popup__overlay')) {
        this.closePopup();
      }
    })
    // добавление слушателя для закрытия попап окна по крестику
    this._popupCloseButton.addEventListener('click', () => this.closePopup())

  }

  _handleEscClose = (event) => {
    // функция для закрытия попап окна по кнопке Esc
    if (event.key === 'Escape') {
      this.closePopup();
    }
  }

  openPopup() {
    this._popup.classList.add('popup_opened');

    // добавление слушателя для закрытия попап окна по кнопке Esc
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');

    // Удаления слушателя для закрытия попап окна по кнопке Esc
    document.removeEventListener('keydown', this._handleEscClose);
  }
}
