export class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
  };
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .firstElementChild
      .cloneNode(true);;
    return cardElement;
  }

  render() {
    //клонирование котейнера

    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.elements__element-image');
    this._cardText = this._card.querySelector('.elements__element-title');
    this._cardRemove = this._card.querySelector('.elements__element-trash');
    this._cardLike = this._card.querySelector('.elements__element-like');

    //данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;

    this._setEventListeners();
    return this._card;
  };
  _setEventListeners() {
    // Обработчики
    this._cardRemove.addEventListener('click', () => this._remove());
    this._cardLike.addEventListener('click', () => this._like());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._cardImage));

  }

  _remove() {

    this._card.remove();
    this._card = null;
  };

  _like() {
    this._cardLike.classList.toggle('elements__element-like_active');
  };

}