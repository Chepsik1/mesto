import {
    Popup
} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this.form = this._popupSelector.querySelector('form');
    }

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('input');
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
        this._popupSelector.addEventListener('submit', (evt) => {
            this._submitHandler(evt);
        })

        super.setEventListeners();
    }

    close() {
        super.close();
        this.form.reset();
    }
    dataLoading(load) {
        if (load) {
            this._submitButton.textContent = "Сохранение..."
        } else {
            this._submitButton.textContent = "Сохранить"
        }
    }
}