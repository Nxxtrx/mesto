import {popupImageItem} from './index.js'

class Card {
  constructor(card, templateSelector, openPopup){
    this._name = card.name;
    this._link = card.link;
    this._openPopupImage = openPopup;
    this._templateSelector = templateSelector;
  }

  // функция клонирования типплейта
  _getTemplate = () => {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.cards__item').cloneNode(true);
    return cardElement;
  }

  // функция лайка карточки
  _switchLikeCard = () => {
    this._likeButton.classList.toggle('cards__like-btn_active');
  }

  // функция удаления карточки
  _removeCard = () => {
    this._element.remove();
  }

  // функция открытия попап окна с картинкой
  _openImagePopup = () => {
    this._popupImage = document.querySelector('.popup__image');
    this._popupImage.src = this._cardImage.src;
    this._popupImage.alt = this._cardTitle.textContent;

    this._popupTitle = document.querySelector('.popup__image-title');
    this._popupTitle.textContent = this._cardTitle.textContent;

    this._openPopupImage(popupImageItem);
  }

  _addEventListener = () => {
    // слушатель для лайка на карточке
    this._likeButton.addEventListener('click', () => {
      this._switchLikeCard();
    })

    // Слушатель для удаления карточки
    this._buttonRemoveCard.addEventListener('click', () => {
      this._removeCard();
    })

    // Слушатель на картинку для открытия попапа
    this._cardImage.addEventListener('click', () => {
      this._openImagePopup();
    })
  }

  generateCard=() => {
    this._element = this._getTemplate();

    // ссылка на картинку
    this._cardImage = this._element.querySelector('.cards__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name

    // название карточки
    this._cardTitle = this._element.querySelector('.cards__subtitle');
    this._cardTitle.textContent = this._name;

    // кнопка лайка
    this._likeButton = this._element.querySelector('.cards__like-btn');

    // кнопка удаления карточки
    this._buttonRemoveCard = this._element.querySelector('.cards__delete-btn');

    // добавления слушателей
    this._addEventListener();
    return this._element;
  }
}
export {Card};

