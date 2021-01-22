import Popup from './Popup.js';
export class PopupWithSubmit extends Popup {
    constructor(selector) {
        super(selector);
        this._handleSubmit = this._selector.querySelector('.popup-del__conteiner');
    }

    handleSubmit(handleSubmitform) {
        this._handleSubmitform = handleSubmitform
    }

    setEventListeners() {
        super.setEventListeners();
        this._handleSubmit.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitform();
        })
    }
}