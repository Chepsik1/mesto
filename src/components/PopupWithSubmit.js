import {
    Popup
} from "./Popup.js";

export class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._formElementConteiner = this._popupElement.querySelector('.popup-del__conteiner');
    }

    handleSubmit(handleSubmitform) {
        this._handleSubmitform = handleSubmitform
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElementConteiner.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitform();
        })
    }
}