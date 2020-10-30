function showError(formElement, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(obj.inputErrorClass);
}

function hideError(formElement, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(obj.inputErrorClass);
}



function checkInputValidity(formElement, input) {
    if (input.checkValidity()) {
        hideError(formElement, input);
    } else {
        showError(formElement, input);
    }
}

function toggleButtonState(formElement, buttonElement) {
    if (formElement.checkValidity()) {
        buttonElement.classList.remove(obj.inactiveButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(obj.inactiveButtonClass);
        buttonElement.disabled = true;
    }
}

function setEventListener(formElement) {
    const inputElements = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);

    inputElements.forEach((input) => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(formElement, evt.target);
            toggleButtonState(formElement, buttonElement);
        });

    });
    toggleButtonState(formElement, buttonElement);
}

function enableValidation() {
    const formElements = Array.from(document.querySelectorAll(obj.formSelector));
    formElements.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

        });
        setEventListener(form);
    })


}

enableValidation(obj = {
    formSelector: 'form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_invalid',
    inputErrorClass: 'popup__input_state_invalid',

});