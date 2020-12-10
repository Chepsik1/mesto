export class FormValidator {
    constructor(formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
       
        this._formSelector = formSelector;
        this._formElement = document.querySelectorAll(this._formSelector);
        this._inputSelector = inputSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._inactiveButtonClass = inactiveButtonClass;
        this._inputErrorClass = inputErrorClass;
        this._errorClass = errorClass;

    }
    
    _showError(formElement, input) {
        const errorElement = formElement.querySelector(`#${input.id}-error`);
        errorElement.textContent = input.validationMessage;
        input.classList.add(this._inputErrorClass);

    }

    _hideError(formElement, input) {
        const errorElement = formElement.querySelector(`#${input.id}-error`);
        errorElement.textContent = '';
        input.classList.remove(this._inputErrorClass);

    }
    _checkInputValidity(formElement, input) {

        if (input.checkValidity()) {
            this._hideError(formElement, input, this._inputErrorClass, this._errorClass);
        } else {
            this._showError(formElement, input, this._inputErrorClass, this._errorClass);
        }

    }
    _toggleButtonState(formElement, buttonElement) {
        if (formElement.checkValidity()) {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        } else {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
        }

    }

    _setEventListener(formElement) {
        const inputElements = Array.from(formElement.querySelectorAll(this._inputSelector));
        const buttonElement = formElement.querySelector(this._submitButtonSelector);

        inputElements.forEach((input) => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(formElement, evt.target);
                this._toggleButtonState(formElement, buttonElement);
                // console.log(formElement);
            });

        });
        this._toggleButtonState(formElement, buttonElement);

    }

    enableValidation() {
        const formElements = Array.from(document.querySelectorAll(this._formSelector));
       
        formElements.forEach((form) => {
            form.addEventListener('submit', (evt) => {
                evt.preventDefault();
               
            });
        
            this._setEventListener(form);

        })


    }
}