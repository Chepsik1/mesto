const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__addit-button');
const closePopupButton = document.querySelector('.popup__close');


let popupToggle = function (event) {
    event.preventDefault();
    popup.classList.toggle('popup_opened');
    
}

let closePopup = function (event) {
    if (event.target !== event.currentTarget) return
    
    popupToggle(event);
    
}

openPopupButton.addEventListener('click', popupToggle);
closePopupButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closePopup);

let inputName = document.querySelector('.popup__input-name');
let formElement = document.querySelector('.popup__container');
let popupSave = document.querySelector('.popup__save');


function formSubmitHandler(evt) {
    
    evt.preventDefault();
    
    let nameInput = document.querySelector('.popup__input-name');
    let jobInput = document.querySelector('.popup__input-occupation');

    nameProfil = document.querySelector('.profile__name');
    profileOccupation = document.querySelector('.profile__occupation');
    
    nameProfil.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;
    popupToggle(event);
    // self.close(popupToggle(event));
    
}

formElement.addEventListener('submit', formSubmitHandler);
