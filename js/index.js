import { Card } from './Card.js';
import {FormValidator } from "./FormValidator.js"
export const titleImageFoto = document.querySelector('.popup-image__title');
export const newItemImage = document.querySelector('.popup-image');
export const imageFoto = document.querySelector('.popup-image__foto');
const imageCard = document.querySelector('.elements__element-image');
const popupProfil = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__addit-button');
const closePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('#username');
const jobInput = document.querySelector('#occupation');
const nameProfil = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const newItemForm = document.querySelector('.new-item-popup');
const openNewItemFormButton = document.querySelector('.profile__add-button');
const closeNewItemFormButton = document.querySelector('.new-item-popup__close');
const newItemPopupContainer = document.querySelector('.new-item-popup__container');
const elements = document.querySelector('.elements');
const nameImege = document.querySelector('#placename');
const linkImage = document.querySelector('#linkpicture');
const newItemImageClose = document.querySelector('.popup-image__close');
const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
];


const formValidator = new FormValidator(
    'form',
    '.popup__input',
    '.popup__save',
    'popup__save_invalid',
    'popup__input_state_invalid',
  );
    formValidator.enableValidation();


//Вставка масива на страницу
const addCardsTemplate = () => {
   // const elements = document.querySelector('.elements');
    const items = initialCards.map(elements => generateCard(elements));
  
    elements.append(...items);
   
  };
  
  //Добавление карточки на страницу
    const generateCard = (initialCards) => {
       
    const cardTemplate = new Card(initialCards.name, initialCards.link, '#cards');
  // console.log(listCards)
  
    return cardTemplate.render();

 

  }

  addCardsTemplate();

//Добавление карточки на страницу
function addCardTemplate(evt) {
    evt.preventDefault()
    const cardTemplate = generateCard({
        name: nameImege.value,
        link: linkImage.value
      });

elements.prepend(cardTemplate);
    closePopup(newItemForm);
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", closeEsc)
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", closeEsc)
}

function closeEsc(evt) {
    const popupActive = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(popupActive);
    }
}

function closeOnOverlay(evt) {
    const popupActive = document.querySelector('.popup_opened');
    if (evt.target === evt.currentTarget) {
        closePopup(popupActive);
    }

}

function handleFormSubmit(textContent) {
    textContent.preventDefault();
    nameProfil.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;
    closePopup(popupProfil);

}


 formElement.addEventListener('submit', handleFormSubmit);
 openPopupButton.addEventListener('click', () => openPopup(popupProfil));
//  imageCard.addEventListener('click', openPopup(newItemImage));
 closePopupButton.addEventListener('click', () => closePopup(popupProfil));
 openNewItemFormButton.addEventListener('click', () => openPopup(newItemForm));
 closeNewItemFormButton.addEventListener('click', () => closePopup(newItemForm));
 newItemImageClose.addEventListener('click', () => closePopup(newItemImage));
 newItemPopupContainer.addEventListener('submit', addCardTemplate);
 popupProfil.addEventListener('click', closeOnOverlay);
 newItemForm.addEventListener('click', closeOnOverlay);
 newItemImage.addEventListener('click', closeOnOverlay);

