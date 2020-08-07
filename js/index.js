const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__addit-button');
const closePopupButton = document.querySelector('.popup__close');

let formElement = document.querySelector('.popup__container');
let popupSave = document.querySelector('.popup__save');

let nameInput = document.querySelector('#username');
let jobInput = document.querySelector('#occupation');

let nameProfil = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

let popupToggle = function (textContent) {
    if (event.target !== event.currentTarget) return
    textContent.preventDefault();
    popup.classList.toggle('popup_opened');
}



function formSubmitHandler(textContent) {
    textContent.preventDefault();
    nameProfil.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;
    popupToggle(event);
}

formElement.addEventListener('submit', formSubmitHandler);

openPopupButton.addEventListener('click', popupToggle);
closePopupButton.addEventListener('click', popupToggle);
popup.addEventListener('click', popupToggle);