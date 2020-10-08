const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__addit-button');
const closePopupButton = document.querySelector('.popup__close');



let formElement = document.querySelector('.popup__container');
let popupSave = document.querySelector('.popup__save');

let nameInput = document.querySelector('#username');
let jobInput = document.querySelector('#occupation');

let nameProfil = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');


let popupToggle = function (event) {
    if (event.target !== event.currentTarget) return;
    popup.classList.toggle('popup_opened');
    

    if (popup.classList.contains("popup_opened")) {
        nameInput.value = nameProfil.textContent;
        jobInput.value = profileOccupation.textContent;
    }

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

