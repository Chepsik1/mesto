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
let newItemFormToggle = function (event) {
    if (event.target !== event.currentTarget) return;
    newItemForm.classList.toggle('popup_opened');

    if (popup.classList.contains("popup_opened")) {
        linkImage.value = initialCards[link];
        nameImege.value = initialCards[name];
    }
}

function formSubmitCard(textContent) {

    textContent.preventDefault();

    initialCards.textContent = linkImage.value;
    initialCards.textContent = nameImege.value;
    initialCards.push(linkImage.value + nameImege.value);
    initialCards.link = linkImage.value;
    initialCards.name = nameImege.value;
    newItemFormToggle(event);
    cardTemplate();
}

//Вставка масива на страницу
let cardsTemplate = function () {
    for (i = 0; i < initialCards.length; i += 1) {
        let cardTemplate = card.cloneNode(true);
        cardTemplate.querySelector('.elements__element-image').src = initialCards[i].link;
        cardTemplate.querySelector('.elements__element-image').alt = 'фото';
        cardTemplate.querySelector('.elements__element-title').textContent = initialCards[i].name;
        elements.append(cardTemplate);
    }
}
cardsTemplate();

//Добавление карточки на страницу
let cardTemplate = function () {
    let cardTemplate = card.cloneNode(true);
    cardTemplate.querySelector('.elements__element-image').src = linkImage.value;
    cardTemplate.querySelector('.elements__element-image').alt = 'фото';
    cardTemplate.querySelector('.elements__element-title').textContent = nameImege.value;
    elements.prepend(cardTemplate);
}

 

//добавление лайков

elements.addEventListener('click', ({
    target: like
}) => {
    if (like.classList.contains('elements__element-like')) {
        const index = [...document.querySelectorAll('.elements__element-like')].indexOf(like);
        const count = document.querySelectorAll('.elements__element-like')[index];
        count.classList.toggle('elements__element-like_active');
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
        const count = document.querySelector('.popup-image');
        count.classList.toggle('popup-image_opened');
        
        imageFoto.src = imegePopup.src;
        imageFoto.alt = imegePopup.alt;
        titleImageFoto.textContent = titleFoto.textContent;
       
    }
    
});

let ItemImageClose = function () {
   
    newItemImage.classList.toggle('popup-image_opened');
    
}




  

newItemImageClose.addEventListener('click', ItemImageClose );
newItemPopupContainer.addEventListener('submit', formSubmitCard);
newItemForm.addEventListener('click', newItemFormToggle);
openNewItemFormButton.addEventListener('click', newItemFormToggle);
closeNewItemFormButton.addEventListener('click', newItemFormToggle);

