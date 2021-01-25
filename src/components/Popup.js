export class Popup {
    constructor(popupSelector) {
        this. _popupElement = document.querySelector(popupSelector);
        this._closeButton = this. _popupElement.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._submitButton = this. _popupElement.querySelector('.popup__save');
    }
    open() {
        // открытие  попапа
        this. _popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);

    }
    close() {
        // закрытие попапа
        this. _popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);

    }
    _handleEscClose(evt) {
        // закрытия попапа клавишей Esc
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target === this. _popupElement) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', this.close.bind(this));
        this. _popupElement.addEventListener('click', this._handleOverlayClose.bind(this));
    }

}