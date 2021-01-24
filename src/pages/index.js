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
import {
    PopupWithSubmit
} from '../components/PopupWithSubmit.js';


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

const userInfo = new UserInfo({
    profileNameSelector: '.profile__name',
    profileAboutSelector: '.profile__occupation',
    avatar: '.profile__avatar'
});

const deleteCardPopup = new PopupWithSubmit('.popup-del', () => {}) //пустая функция);
deleteCardPopup.setEventListeners();

const popupProfile = new PopupWithForm('.popup', (res) => {

    popupProfile.dataLoading(true);
    api.updateInfo({
            about: res.occupation,
            name: res.username,
        })
        .then((data) => {
            userInfo.setUserInfo(data);
            profilName.textContent = data.name;
            profilAbout.textContent = data.about;
            popupProfile.close();
        })

        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupProfile.dataLoading(false)
        })

});


Promise.all([
        api.getInfoAndAvatar(),
        api.getCards()
    ])
    .then((value) => {
        const [userData, item] = value

        profilName.textContent = userData.name;
        profilAbout.textContent = userData.about;
        profilAvatar.src = userData.avatar;

        function addProfileUser() {
            userInfo.getUserInfo(userData);
            nameInput.value = profilName.textContent;
            jobInput.value = profilAbout.textContent;
            popupProfile.open();
        }

        popupProfile.setEventListeners();
        openPopupButton.addEventListener('click', addProfileUser);

        const cardPopupHandle = new PopupWithForm('.new-item-popup', (data) => {
            cardPopupHandle.dataLoading(true);

            api.addNewCard({
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
                .finally(() => {
                    cardPopupHandle.dataLoading(false)
                })
            cardPopupHandle.close();
        })
        cardPopupHandle.setEventListeners();

        // //открытие попапа редактирвоания профиля и заполнение 
        const addProfileInfo = () => {
            cardPopupHandle.open();
        }
        openNewItemFormButton.addEventListener('click', addProfileInfo);

        //экземпляр класса с формой для попапа редкатирования 
        function cardRender(data) {
            const cards = new Card(data,
                '#cards',
                () => {
                    popupImg.open(data.link, data.name);
                },
                function delCardServer(card) {
                    deleteCardPopup.open();
                    deleteCardPopup.handleSubmit(() => {
                        api.deleteCard(data._id)
                            .then(() => {
                                cards.carddelete(card);
                                deleteCardPopup.close();
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    })
                },
                data.owner._id,
                userData._id,
                data.likes,
                () => {
                    api.countLikeApi(data)
                        .then((data) => {
                            cards.addLikeOnRequest()
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                },
                () => {
                    api.deleteLike(data)
                        .then((data) => {
                            cards.removeLikeOnRequest()
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                })
            return cards;
        }

        const addSection = new Section({
                renderer: (data) => {
                    const сard = cardRender(data);
                    const cardElement = сard.render();
                    addSection.addItem(cardElement, true);
                }
            },
            '.elements');
        addSection.renderItems(item);
    })

//открытие попапа аватара и редактирование авы
const avatarPopupForm = new PopupWithForm('.popup-avatar', (res) => {
    avatarPopupForm.dataLoading(true);
    api.updateAvatar({
            avatar: res.linkavatar
        })
        .then((data) => {
            profilAvatar.src = data.avatar;
            avatarPopupForm.close();
        })
        .catch((err) => {

            console.log(err);
        })
        .finally(() => {
            avatarPopupForm.dataLoading(false)
        })
})
avatarPopupForm.setEventListeners();
addAvatarButton.addEventListener('click', () => avatarPopupForm.open());