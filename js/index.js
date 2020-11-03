const popupProfil = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__addit-button');
const closePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__container');
const popupSave = document.querySelector('.popup__save');
const nameInput = document.querySelector('#username');
const jobInput = document.querySelector('#occupation');
const nameProfil = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const newItemForm = document.querySelector('.new-item-popup');
const openNewItemFormButton = document.querySelector('.profile__add-button');
const closeNewItemFormButton = document.querySelector('.new-item-popup__close');
const newItemPopupContainer = document.querySelector('.new-item-popup__container');
const card = document.querySelector('#cards').content;
const elements = document.querySelector('.elements');
const nameImege = document.querySelector('#placename');
const linkImage = document.querySelector('#linkpicture');
const imageFoto = document.querySelector('.popup-image__foto');
const imegePopup = document.querySelector('.elements__element-image');
const newItemImage = document.querySelector('.popup-image');
const newItemImageClose = document.querySelector('.popup-image__close');
const titleImageFoto = document.querySelector('.popup-image__title');
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
//Вставка масива на страницу
function addCardsTemplate() {
    for (i = 0; i < initialCards.length; i += 1) {
        const cardTemplate = generateCard(initialCards[i].name, 'фото', initialCards[i].link);
        elements.append(cardTemplate);
    }
}
addCardsTemplate();

//Добавление карточки на страницу
function addCardTemplate() {
    const cardTemplate = generateCard(nameImege.value, 'фото', linkImage.value);
    elements.prepend(cardTemplate);
}

function generateCard(title, alt, imageLink) {

    const cardTemplate = card.cloneNode(true);
    const cardImage = cardTemplate.querySelector('.elements__element-image');
    cardTemplate.querySelector('.elements__element-title').textContent = title;
    cardImage.alt = alt;
    cardImage.src = imageLink;
    const initialCards = {
        name: title,
        link: imageLink,
    }

    const like = cardTemplate.querySelector(".elements__element-like");
    like.addEventListener("click", function (evt) {
        evt.target.classList.toggle("elements__element-like_active");
    });
    closePopup(newItemForm);
    const trash = cardTemplate.querySelector(".elements__element-trash");
    trash.addEventListener("click", function (evt) {
        evt.target.closest('.elements__element').remove();
    });

    cardImage.addEventListener('click', (evt) => {
        imageFoto.src = evt.target.src;
        imageFoto.alt = evt.target.alt;
        titleImageFoto.textContent = title;
        openPopup(newItemImage);
    });

    return cardTemplate;

}


function openPopup(popup) {
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
closePopupButton.addEventListener('click', () => closePopup(popupProfil));
openNewItemFormButton.addEventListener('click', () => openPopup(newItemForm));
closeNewItemFormButton.addEventListener('click', () => closePopup(newItemForm));
newItemImageClose.addEventListener('click', () => closePopup(newItemImage));
newItemPopupContainer.addEventListener('submit', addCardTemplate);
popupProfil.addEventListener('click', closeOnOverlay);
newItemForm.addEventListener('click', closeOnOverlay);
newItemImage.addEventListener('click', closeOnOverlay);