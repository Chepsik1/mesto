export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._closeButton = this._popupSelector.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._submitButton = this._popupSelector.querySelector('.popup__save');
    }
    open() {
        // открытие  попапа
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);

    }
    close() {
        // закрытие попапа
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);

    }
    _handleEscClose(evt) {
        // закрытия попапа клавишей Esc
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target === this._popupSelector) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', this.close.bind(this));
        this._popupSelector.addEventListener('click', this._handleOverlayClose.bind(this));
    }

}