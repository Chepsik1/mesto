export class Card {
  constructor(data, templateSelector, handleCardClick, delCard, ownerid, userid, likes, addLike, removeLike) {
    this._name = data.name;
    this._link = data.link;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = likes;
    this._owner = ownerid;
    this._cardId = data._id;
    this._userid = userid;
    this.delCard = delCard;
    this._addLike = addLike;
    this._removeLike = removeLike;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .firstElementChild
      .cloneNode(true);
    return cardElement;
  }

  render() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.elements__element-image');
    this._cardText = this._card.querySelector('.elements__element-title');
    this._cardRemove = this._card.querySelector('.elements__element-trash');
    this._cardLike = this._card.querySelector('.elements__element-like');
    this._scoreLikes = this._card.querySelector('.elements__like-number');

    this._likes.forEach((like) => {
      if (like._id === this._userid) {
        this._cardLike.classList.add('elements__element-like_active');
      };
    });

    //данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;
    this._renderLikesNumber();
    this._renderButtons();
    this._setEventListeners();
    return this._card;
  };
  _setEventListeners() {
    // Обработчики
    this._cardRemove.addEventListener('click', () => this._remove());
    this._cardLike.addEventListener('click', () => this._like());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this.link));
  }
  id() {
    return this._cardId;
  }

  _remove() {
    this.delCard();
  };

  carddelete() {
    this._card.remove();
    this._card = null;
  }

  _renderLikesNumber() {
    this._scoreLikes = this._card.querySelector('.elements__like-number');
    if (this._likes.length >= 1) {
      this._scoreLikes.textContent = this._likes.length;

    } else {
      this._scoreLikes.textContent = '';
    }

  }
  _like() {
    if (this._cardLike.classList.contains('elements__element-like_active')) {
      this._cardLike.classList.remove('elements__element-like_active');
      this._scoreLikes.textContent = this._likes.length -= 1;
      this._removeLike();
    } else {
      this._cardLike.classList.add('elements__element-like_active');
      this._scoreLikes.textContent = this._likes.length += 1;
      this._addLike();
    }
  }

  _renderButtons() {
    if (this._userid === this._owner) {
      this._cardRemove.classList.add('elements__element-trash_visible');
    } else {
      this._cardRemove.classList.add('elements__element-trash_hidden');
    }
  }
}