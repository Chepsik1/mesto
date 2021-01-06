import {
    Popup
} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._text = this._selector.querySelector('.popup-image__title');
        this._image = this._selector.querySelector('.popup-image__foto');

    }

    open(link, name) {
        this._image.src = link;
        this._image.alt = name;
        this._text.textContent = name;

        super.open();

    }

}