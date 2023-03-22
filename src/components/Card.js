class Card {
  constructor({card, templateSelector, hundleCardClick, userId, handleLikeBtn, handleRemoveCard}){
    this._name = card.name;
    this._link = card.link;
    this._hundleCardClick = hundleCardClick;
    this._templateSelector = templateSelector;

    this._handleLikeCard = handleLikeBtn;
    this._cardId = card._id;
    this._like = card.likes;
    this._userId = userId;
    this._cardOwnerId = card.owner._id;

    this._handleRemoveCard = handleRemoveCard;
  }

  // функция клонирования типплейта
  _getTemplate = () => {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.cards__item').cloneNode(true);
    return cardElement;
  }

  addLikeCard() {
    this._likeButton.classList.add('cards__like-btn_active');
    this.isLiked = true;
  }

  removeLikeCard() {
    this._likeButton.classList.remove('cards__like-btn_active');
    this.isLiked = false;
  }

  updateCounterLike(cardLike) {
    this._likeCount.textContent = cardLike.length
  }

  _checkUserLike() {
    return this._like.some((item) => {
      return item._id === this._userId;
    })
  }

  _toggleLikeWhileLodaing() {
    if(this._checkUserLike()){
      this.addLikeCard()
    } else {
      this.removeLikeCard();
    }
  }

  // функция удаления карточки
  removeCard = () => {
    this._element.remove();
    this._element = null;
  }


  _addEventListener = () => {
    // слушатель для лайка на карточке
    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard();
    })

    if (this._cardOwnerId == this._userId) {
      // Слушатель для удаления карточки
      this._buttonRemoveCard.addEventListener('click', () => {
        this._handleRemoveCard();
    })
    } else {
      this._buttonRemoveCard.remove();
      this._buttonRemoveCard = null;
    }

    // Слушатель на картинку для открытия попапа
    this._cardImage.addEventListener('click', () => {
      this._hundleCardClick(this._link, this._name);
    })
  }

  getCardId() {
    return this._cardId;
  }

  generateCard=() => {
    this._element = this._getTemplate();

    // ссылка на картинку
    this._cardImage = this._element.querySelector('.cards__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    // название карточки
    this._cardTitle = this._element.querySelector('.cards__subtitle');
    this._cardTitle.textContent = this._name;

    // кнопка лайка
    this._likeButton = this._element.querySelector('.cards__like-btn');


    this._likeCount = this._element.querySelector('.cards__like-counter');
    this._likeCount.textContent = this._like.length;

    // кнопка удаления карточки
    this._buttonRemoveCard = this._element.querySelector('.cards__delete-btn');

    // добавления слушателей
    this._addEventListener();
    this._toggleLikeWhileLodaing();
    return this._element;
  }
}
export {Card};

