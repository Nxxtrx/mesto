class Card {
  constructor(card, templateSelector, openPopupImage){
    this._name = card.name;
    this._link = card.link;
    this._openPopupImage = openPopupImage;
    this._templateSelector = templateSelector;

  }
  _getTemplate = () => {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.cards__item').cloneNode(true);
    return cardElement;
  }

  generateCard=() => {
    this._element = this._getTemplate();

    // ссылка на картинку
    this._cardImage = this._element.querySelector('.cards__image');
    this._cardImage.src= this._link;
    // название карточки
    this._cardTitle = this._element.querySelector('.cards__subtitle');
    this._cardTitle.textContent = this._name;
    // кнопка лайка
    this._likeButton = this._element.querySelector('.cards__like-btn');
    // кнопка удаления карточки
    this._removeCardButton = this._element.querySelector('.cards__delete-btn');

    // добавления слушателей
    this._addEventListener();
    return this._element;
  }
  _addEventListener = () => {

    // слушатель для лайка на карточке
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.toggle('cards__like-btn_active');
    })

    // Слушатель для удаления карточки
    this._removeCardButton.addEventListener('click', () => {
      this._removeCardButton.closest('.cards__item').remove();
    })

    // Слушатель на картинку для открытия попапа
    this._cardImage.addEventListener('click', () => {
      this._popupOpenImage = document.querySelector('.popup__image');
      this._popupOpenImage.src = this._cardImage.src;
      this._popupOpenTitle = document.querySelector('.popup__image-title');
      this._popupOpenTitle.textContent = this._cardTitle.textContent;
      this._openPopupImage();
    })

  }
}

export {Card};

