import {
  imageFoto
} from "./index.js";
import {
  titleImageFoto
} from "./index.js";
import {
  Popup
} from "./Popup.js";

export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._template = document.querySelector(templateSelector).content.querySelector('.elements__element');
  };

  render() {
    //клонирование котейнера

    this._card = this._template.cloneNode(true);
    this._cardImage = this._card.querySelector('.elements__element-image');
    this._cardText = this._card.querySelector('.elements__element-title');
    this._cardRemove = this._card.querySelector('.elements__element-trash');
    this._cardLike = this._card.querySelector('.elements__element-like');

    //данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;

    // Обработчики
    this._cardRemove.addEventListener('click', () => this._remove());
    this._cardLike.addEventListener('click', () => this._like());
    this._cardImage.addEventListener('click', () => this._handleCardClick());

    return this._card;
  };

  _remove() {
    this._card.remove();

  };

  _like() {
    this._cardLike.classList.toggle('elements__element-like_active');
  };

  _handleCardClick() {
    const popUpImage = new Popup('.popup-image');
    imageFoto.src = this._link;
    imageFoto.alt = this._name;
    titleImageFoto.textContent = this._name;
    popUpImage.open(this._link, this._name);
    console.log(popUpImage)
  }
}