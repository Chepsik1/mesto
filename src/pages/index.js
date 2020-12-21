import './index.css';
import {
    Card
} from '../js/Card.js';
import {
    FormValidator
} from "../js/FormValidator.js"
import {
    PopupWithForm
} from '../js/PopupWithForm.js';
import {
    UserInfo
} from '../js/UserInfo.js';

import {
    Section
} from '../js/Section.js';

import {
    PopupWithImage
} from '../js/PopupWithImage.js';

const buttonSave = document.querySelector('.popup__save');
export const titleImageFoto = document.querySelector('.popup-image__title');
export const newItemImage = document.querySelector('.popup-image');
export const imageFoto = document.querySelector('.popup-image__foto');
const openPopupButton = document.querySelector('.profile__addit-button');
const nameInput = document.querySelector('#username');
const jobInput = document.querySelector('#occupation');
// const newItemForm = document.querySelector('.new-item-popup');
export const openNewItemFormButton = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');
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


const formValidatorUser = new FormValidator(
    '.popup__container',
    '.popup__input',
    '.popup__save',
    'popup__save_invalid',
    'popup__state',
);
const formValidatorCard = new FormValidator(
    '.new-item-popup__container',
    '.popup__input',
    '.popup__save',
    'popup__save_invalid',
    'popup__input_state_invalid',

);
formValidatorUser.enableValidation();
formValidatorCard.enableValidation();

const addSection = new Section({
        items: initialCards,
        renderer: (data) => {
            const listCards = new Card(data.name, data.link, '#cards');
            const cardElement = listCards.render();
            addSection.addItem(cardElement);
        }
    },
    '.elements');
addSection.renderItems();

const popupImg = new PopupWithImage('.popup-image');
popupImg.setEventListeners();



const handleCardPopup = new PopupWithForm('.new-item-popup', (data) => {
    const addCard = new Card(data['placename'], data['linkpicture'], '#cards');
    const cardElement = addCard.render();
    elements.prepend(cardElement);
})

buttonSave.addEventListener('click', () => handleCardPopup._getInputValues());
handleCardPopup.setEventListeners();

// //открытие попапа редактирвоания профиля и заполнение 
const addProfileInfo = () => {
    handleCardPopup.open();
}
openNewItemFormButton.addEventListener('click', addProfileInfo);

//открытие попапа редактирвоания профиля и заполнение 
const addProfileUser = () => {
    const cardInfo = handleUserInfo.getUserInfo();
    nameInput.value = cardInfo.name;
    jobInput.value = cardInfo.about;
    handleProfilePopup.open();
}

//получаем данные из полей
const handleUserInfo = new UserInfo({
    profileNameSelector: '.profile__name',
    profileAboutSelector: '.profile__occupation'
});

//экземпляр класса с формой для попапа редкатирования профиля
const handleProfilePopup = new PopupWithForm('.popup', () => {
    handleUserInfo.setUserInfo({
        profileName: nameInput.value,
        profileAbout: jobInput.value
    });
});


handleProfilePopup.setEventListeners();
openPopupButton.addEventListener('click', addProfileUser);