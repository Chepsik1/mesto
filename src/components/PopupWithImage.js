import {
    Popup
} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._text = this._selector.querySelector('.elements__element-title');
        this._image = this._selector.querySelector('.elements__element-image');

    }

    open(image, text) {
        this._text = text;
        this._image = image;
        super.open();

    }

}