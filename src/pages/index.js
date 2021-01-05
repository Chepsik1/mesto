import './index.css';
import {
    Card
} from '../components/Card.js';
import {
    FormValidator
} from "../components/FormValidator.js"
import {
    PopupWithForm
} from '../components/PopupWithForm.js';
import {
    UserInfo
} from '../components/UserInfo.js';

import {
    Section
} from '../components/Section.js';

import {
    PopupWithImage
} from '../components/PopupWithImage.js';

const titleImageFoto = document.querySelector('.popup-image__title');
export const newItemImage = document.querySelector('.popup-image');
export const imageFoto = document.querySelector('.popup-image__foto');
const openPopupButton = document.querySelector('.profile__addit-button');
const nameInput = document.querySelector('#username');
const jobInput = document.querySelector('#occupation');
export const openNewItemFormButton = document.querySelector('.profile__add-button');
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
const dataValidatorUser = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_invalid',
    inputErrorClass: 'popup__state',

};
const dataValidatorCard = {
    formSelector: '.new-item-popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_invalid',
    inputErrorClass: 'popup__input_state_invalid',
}

const formValidatorUser = new FormValidator(
    dataValidatorUser
);
const formValidatorCard = new FormValidator(
    dataValidatorCard
);
formValidatorUser.enableValidation();
formValidatorCard.enableValidation();

const popupImg = new PopupWithImage('.popup-image');
popupImg.setEventListeners();


function cardRender(data) {
    const cards = new Card(data, '#cards',

        () => {
            const imagePhoto = document.querySelector('.popup-image__foto');
            imagePhoto.src = data.link;
            imagePhoto.alt = data.name;
            titleImageFoto.textContent = data.name;
            popupImg.open(data.link, data.name);
        })
    return cards;
}

const addSection = new Section({
        items: initialCards,
        renderer: (data) => {
            const сard = cardRender(data);
            const cardElement = сard.render();
            addSection.addItem(cardElement, data);


        }
    },

    '.elements');
addSection.renderItems();

const handleCardPopup = new PopupWithForm('.new-item-popup', (data) => {
    data.name = data['placename'];
    data.link = data['linkpicture'];
    const addCard = cardRender(data);
    const cardElement = addCard.render();
    addSection.addItem(cardElement);
    handleCardPopup.close()
})

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
        profileName: username.value,
        profileAbout: occupation.value

    });
    handleProfilePopup.close()
});

handleProfilePopup.setEventListeners();
openPopupButton.addEventListener('click', addProfileUser);