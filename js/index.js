const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__addit-button');
const closePopupButton = document.querySelector('.popup__close');



const formElement = document.querySelector('.popup__container');
const popupSave = document.querySelector('.popup__save');

const nameInput = document.querySelector('#username');
const jobInput = document.querySelector('#occupation');

const nameProfil = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

function switchPopupToggle(event) {
    if (event.target !== event.currentTarget) return;
    popup.classList.toggle('popup_opened');


    if (popup.classList.contains("popup_opened")) {
        nameInput.value = nameProfil.textContent;
        jobInput.value = profileOccupation.textContent;
    }

}


function handleFormSubmit(textContent) {

    textContent.preventDefault();
    nameProfil.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;
    switchPopupToggle(window.event);

}



formElement.addEventListener('submit', handleFormSubmit);

openPopupButton.addEventListener('click', switchPopupToggle);
closePopupButton.addEventListener('click', switchPopupToggle);
popup.addEventListener('click', switchPopupToggle);