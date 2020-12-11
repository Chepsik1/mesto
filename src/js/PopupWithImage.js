import {
    Popup
} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._image = this._selector.querySelector('.elements__element-image');
        this._text = this._selector.querySelector('.elements__element-title');
    }

    open(text, image) {
        this._image.src = image;
        this._text.textContent = text;
        super.open();
    }

}