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
import {
    Api
} from '../components/Api.js';


export const newItemImage = document.querySelector('.popup-image');
export const imageFoto = document.querySelector('.popup-image__foto');
const openPopupButton = document.querySelector('.profile__addit-button');
const nameInput = document.querySelector('#username');
const jobInput = document.querySelector('#occupation');
export const openNewItemFormButton = document.querySelector('.profile__add-button');
const addAvatarButton = document.querySelector('.profile__icon');
const profilName = document.querySelector('.profile__name');
const profilAbout = document.querySelector('.profile__occupation');
const profilAvatar = document.querySelector('.profile__avatar');


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

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-19',
    token: '7a8e1597-631d-4e13-9c4a-d90c5bcc223b',

});

Promise.all([
        api.getInfoAndAvatar()
    ])
    .then((value) => {
        const [userData] = value
        api.getInfoAndAvatar()
            .then((data) => {
                const handleUserInfo = new UserInfo({
                    profileNameSelector: '.profile__name',
                    profileAboutSelector: '.profile__occupation',
                    avatar: '.profile__avatar'
                });
                profilName.textContent = data.name;
                profilAbout.textContent = data.about;
                profilAvatar.src = data.avatar;

                const addProfileUser = () => {
                    handleUserInfo.getUserInfo(data);
                    nameInput.value = profilName.textContent;
                    jobInput.value = profilAbout.textContent;
                    handleProfilePopup.open();
                }

                const handleProfilePopup = new PopupWithForm('.popup', (res) => {
                    handleProfilePopup.dataLoading(true);
                    api.updateInfo({
                            about: res.occupation,
                            name: res.username,
                        })
                        .then((data) => {
                            handleUserInfo.setUserInfo(data);
                            profilName.textContent = data.name;
                            profilAbout.textContent = data.about;
                            handleProfilePopup.close();
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                });
                handleProfilePopup.setEventListeners();
                openPopupButton.addEventListener('click', addProfileUser);
            })
            .catch((err) => {
                console.log(err);
            })
        const handleCardPopup = new PopupWithForm('.new-item-popup', (data) => {
            data.name = data['placename'],
                data.link = data['linkpicture'],
                data.owner = userData._id;
            handleCardPopup.dataLoading(true);
            api.newCard({
                    name: data['placename'],
                    link: data['linkpicture']
                })
                .then((data) => {
                    const addCard = cardRender(data);
                    const cardElement = addCard.render();
                    addSection.addItem(cardElement);
                })
                .catch((err) => {
                    console.log(err);
                })
            handleCardPopup.close();
        })
        handleCardPopup.setEventListeners();

        //открытие попапа аватара и редактирование авы
        addAvatarButton.addEventListener('click', () => {
            const avatar = new PopupWithForm('.popup-avatar', (res) => {
                avatar.dataLoading(true);
                api.updateAvatar({
                        avatar: res.linkavatar
                    })
                    .then((data) => {
                        profilAvatar.src = data.avatar;
                        avatar.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            avatar.setEventListeners();
            avatar.open();
        })
        api.getCards()
            .then((data) => {
                addSection.renderItems(data);
            })
            .catch((err) => {
                console.log(err);
            })

        const addSection = new Section({
                renderer: (data) => {
                    const сard = cardRender(data);
                    const cardElement = сard.render();
                    addSection.addItem(cardElement, true);
                }
            },
            '.elements');

        //экземпляр класса с формой для попапа редкатирования 
        function cardRender(data) {
            const cards = new Card(data,
                '#cards',
                () => {
                    popupImg.open(data.link, data.name);
                },
                function delCardServer(card) {
                    const deleteCard = new PopupWithForm('.popup-del', () => {
                        api.deleteCard(data._id)
                            .then(() => {
                                cards.carddelete(card);
                                deleteCard.close();
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    })
                    deleteCard.setEventListeners();
                    deleteCard.open();
                },
                data.owner._id,
                userData._id,
                data.likes,
                () => {
                    api.countLikeApi(data)
                        .then((data) => {
                            data.likes;
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                },
                () => {
                    api.deleteLike(data)
                        .then((data) => {
                            data.likes;
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                })
            return cards;
        }

        // //открытие попапа редактирвоания профиля и заполнение 
        const addProfileInfo = () => {
            handleCardPopup.open();
        }
        openNewItemFormButton.addEventListener('click', addProfileInfo);
    })