const newItemForm = document.querySelector('.new-item-popup');
const openNewItemFormButton = document.querySelector('.profile__add-button');
const closeNewItemFormButton = document.querySelector('.new-item-popup__close');
const newItemPopupContainer = document.querySelector('.new-item-popup__container');
const card = document.querySelector('#cards').content;
const elements = document.querySelector('.elements');
const like = document.querySelector('.elements__element-like');
const nameImege = document.querySelector('#placename');
const linkImage = document.querySelector('#linkpicture');
const trash = document.querySelector('.elements__element-trash');
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

//открытие и закрытие попапа
function createItemFormToggle(event) {
    if (event.target !== event.currentTarget) return;
    newItemForm.classList.toggle('popup_opened');
    
    if (popup.classList.contains("popup_opened")) {
        linkImage.value = initialCards[link];
        nameImege.value = initialCards[name];
    }
}

function generateCard(title, alt, imageLink) {
    const cardTemplate = card.cloneNode(true);
    const cardImage = cardTemplate.querySelector('.elements__element-image');
    cardTemplate.querySelector('.elements__element-title').textContent = title;
    cardImage.alt = alt;
    cardImage.src = imageLink;
    return cardTemplate;
}

//Добавление карточки на страницу
function addCardTemplate() {
    const cardTemplate = generateCard(nameImege.value, 'фото', linkImage.value);
    elements.prepend(cardTemplate);
}
//Вставка масива на страницу
function addCardsTemplate() {
    for (i = 0; i < initialCards.length; i += 1) {
        const cardTemplate = generateCard(initialCards[i].name, 'фото', initialCards[i].link);
        elements.append(cardTemplate);
    }
}
addCardsTemplate();

function submitFormCard(textContent) {

    textContent.preventDefault();

    initialCards.textContent = linkImage.value;
    initialCards.textContent = nameImege.value;
    initialCards.push(linkImage.value + nameImege.value);
    initialCards.link = linkImage.value;
    initialCards.name = nameImege.value;
    createItemFormToggle(window.event);
    addCardTemplate();
}

//добавление лайков
elements.addEventListener('click', ({
    target: like
}) => {
    if (like.classList.contains('elements__element-like')) {
        like.classList.toggle('elements__element-like_active');
    }
});

//удаление карточки
elements.addEventListener('click', ({
    target: trash
}) => {
    if (trash.classList.contains('elements__element-trash')) {
        const index = [...document.querySelectorAll('.elements__element-trash')].indexOf(trash);
        const count = document.querySelectorAll('.elements__element')[index];
        count.remove();
    }
});

//открытие и закрытие pop up картинки

elements.addEventListener('click', ({
    target: imegePopup
}) => {
    if (imegePopup.classList.contains('elements__element-image')) {
        const index = [...document.querySelectorAll('.elements__element-image')].indexOf(imegePopup);
        const titleFoto = document.querySelectorAll('.elements__element-title')[index];

        newItemImage.classList.toggle('popup-image_opened');

        imageFoto.src = imegePopup.src;
        imageFoto.alt = imegePopup.alt;
        titleImageFoto.textContent = titleFoto.textContent;
    }
});

function closeItemImage(evt) {
    if (evt.target !== evt.currentTarget) return;
    newItemImage.classList.toggle('popup-image_opened');
}
// Функция escClose(событие){
//     Const открытыйЩасПопап = документ.выберипоселектору(.открытый_попап)
//     Если (событие == ескейп){
//     Закрой(открытыйЩасПопап)
//     }
//     }
 function escClose(evt) {
     
     if(evt.key === "Escape") {
        newItemImage.classList.remove('popup-image_opened');
        popup.classList.remove('popup_opened');
        newItemForm.classList.remove('popup_opened');
     }
 }


 document.addEventListener('keydown',escClose )
newItemImageClose.addEventListener('click', closeItemImage);
newItemPopupContainer.addEventListener('submit', submitFormCard);
newItemForm.addEventListener('click', createItemFormToggle);
openNewItemFormButton.addEventListener('click', createItemFormToggle);
closeNewItemFormButton.addEventListener('click', createItemFormToggle);
newItemImage.addEventListener('click', closeItemImage);