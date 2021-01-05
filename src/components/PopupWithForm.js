import {
    Popup
} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(selector, handleSubmit) {
        super(selector);
        this._handleSubmit = handleSubmit;
        this.form = this._selector.querySelector('form');


    }

    _getInputValues() {
        this._inputList = this._selector.querySelectorAll('input');
        this._inputValues = {};
        this._inputList.forEach(item => {
            this._inputValues[item.name] = item.value;
        });

        return this._inputValues;

    }

    _submitHandler(evt) {
        evt.preventDefault();
        this._handleSubmit(this._getInputValues());
    }

    setEventListeners() {
        this._selector.addEventListener('submit', (evt) => {

            this._submitHandler(evt);

        })

        super.setEventListeners();

    }

    close() {
        super.close();

    }
}