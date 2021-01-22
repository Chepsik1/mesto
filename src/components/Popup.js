export class Popup {
    constructor(selector) {
        this._selector = document.querySelector(selector);
        this._closeButton = this._selector.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._submitButton = this._selector.querySelector('.popup__save');
    }
    open() {
        // открытие  попапа
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);

    }
    close() {
        // закрытие попапа
        this._selector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        
    }
    _handleEscClose(evt) {
        // закрытия попапа клавишей Esc
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target === this._selector) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', this.close.bind(this));
        this._selector.addEventListener('click', this._handleOverlayClose.bind(this));
    }
    dataLoading(load) {
        if (load) {
            this._submitButton.textContent = "Сохранение..."
        } else {
            this._submitButton.textContent = "Сохранить"
        }
    }
}
