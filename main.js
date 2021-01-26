(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a,c,u,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._template=n,this._handleCardClick=r,this._likes=c,this._owner=i,this._cardId=e._id,this._userid=a,this.delCard=o,this._addLike=u,this._removeLike=s}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.firstElementChild.cloneNode(!0)}},{key:"render",value:function(){var e=this;return this._card=this._getTemplate(),this._cardImage=this._card.querySelector(".elements__element-image"),this._cardText=this._card.querySelector(".elements__element-title"),this._cardRemove=this._card.querySelector(".elements__element-trash"),this._cardLike=this._card.querySelector(".elements__element-like"),this._scoreLikes=this._card.querySelector(".elements__like-number"),this._likes.forEach((function(t){t._id===e._userid&&e._cardLike.classList.add("elements__element-like_active")})),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardText.textContent=this._name,this._renderLikesNumber(),this._renderButtons(),this._setEventListeners(),this._card}},{key:"_setEventListeners",value:function(){var e=this;this._cardRemove.addEventListener("click",(function(){return e._remove()})),this._cardLike.addEventListener("click",(function(){return e._like()})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e.link)}))}},{key:"id",value:function(){return this._cardId}},{key:"_remove",value:function(){this.delCard()}},{key:"carddelete",value:function(){this._card.remove(),this._card=null}},{key:"_renderLikesNumber",value:function(){this._scoreLikes=this._card.querySelector(".elements__like-number"),this._likes.length>=1?this._scoreLikes.textContent=this._likes.length:this._scoreLikes.textContent=""}},{key:"_like",value:function(){this._cardLike.classList.contains("elements__element-like_active")?this._removeLike():this._addLike()}},{key:"addLikeOnRequest",value:function(){this._cardLike.classList.add("elements__element-like_active"),this._scoreLikes.textContent=this._likes.length+=1}},{key:"removeLikeOnRequest",value:function(){this._cardLike.classList.remove("elements__element-like_active"),this._scoreLikes.textContent=this._likes.length-=1,this._likes.length<=0&&(this._scoreLikes.textContent="")}},{key:"_renderButtons",value:function(){this._userid===this._owner?this._cardRemove.classList.add("elements__element-trash_visible"):this._cardRemove.classList.add("elements__element-trash_hidden")}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.formSelector,r=t.inputSelector,o=t.submitButtonSelector,i=t.inactiveButtonClass,a=t.inputErrorClass,c=t.errorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=n,this._formElement=document.querySelectorAll(this._formSelector),this._inputSelector=r,this._submitButtonSelector=o,this._inactiveButtonClass=i,this._inputErrorClass=a,this._errorClass=c}var t,r;return t=e,(r=[{key:"_showError",value:function(e,t){e.querySelector("#".concat(t.id,"-error")).textContent=t.validationMessage,t.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e,t){e.querySelector("#".concat(t.id,"-error")).textContent="",t.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e,t){t.checkValidity()?this._hideError(e,t,this._inputErrorClass,this._errorClass):this._showError(e,t,this._inputErrorClass,this._errorClass)}},{key:"_toggleButtonState",value:function(e,t){e.checkValidity()?(t.classList.remove(this._inactiveButtonClass),t.disabled=!1):(t.classList.add(this._inactiveButtonClass),t.disabled=!0)}},{key:"_setEventListener",value:function(e){var t=this,n=Array.from(e.querySelectorAll(this._inputSelector)),r=e.querySelector(this._submitButtonSelector);n.forEach((function(n){n.addEventListener("input",(function(n){t._checkInputValidity(e,n.target),t._toggleButtonState(e,r)}))})),this._toggleButtonState(e,r)}},{key:"enableValidation",value:function(){var e=this;Array.from(document.querySelectorAll(this._formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),e._setEventListener(t)}))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._closeButton=this._popupElement.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this._submitButton=this._popupElement.querySelector(".popup__save")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===this._popupElement&&this.close()}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close.bind(this)),this._popupElement.addEventListener("click",this._handleOverlayClose.bind(this))}}])&&o(t.prototype,n),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n.form=n._popupElement.querySelector("form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupElement.querySelectorAll("input"),this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"_submitHandler",value:function(e){e.preventDefault(),this._handleSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("submit",(function(t){e._submitHandler(t)})),u(f(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){u(f(a.prototype),"close",this).call(this),this.form.reset()}},{key:"dataLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&c(t.prototype,n),a}(i);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){var n=t.profileNameSelector,r=t.profileAboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._name.textContent,e.about=this._about.textContent,e}},{key:"setUserInfo",value:function(e){this._name.textContent=e.profileName,this._about.textContent=e.profileAbout}}])&&h(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e,t){t?this._container.append(e):this._container.prepend(e)}}])&&_(t.prototype,n),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._text=t._popupElement.querySelector(".popup-image__title"),t._image=t._popupElement.querySelector(".popup-image__foto"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=e,this._image.alt=t,this._text.textContent=t,b(S(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),a}(i);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.address,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=r}var t,n;return t=e,(n=[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._address,"/cards"),{method:"GET",headers:{authorization:this._token}}).then((function(t){return e._getResponse(t)}))}},{key:"getInfoAndAvatar",value:function(){var e=this;return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then((function(t){return e._getResponse(t)}))}},{key:"updateInfo",value:function(e){var t=this;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponse(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":this._contentType}}).then((function(e){return t._getResponse(e)}))}},{key:"countLikeApi",value:function(e){var t=this;return fetch("".concat(this._address,"/cards/likes/").concat(e._id),{method:"PUT",headers:{authorization:this._token,"Content-Type":this._contentType}}).then((function(e){return t._getResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._address,"/cards/likes/").concat(e._id),{method:"DELETE",headers:{authorization:this._token,"Content-Type":this._contentType}}).then((function(e){return t._getResponse(e)}))}}])&&C(t.prototype,n),e}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t,n){return(R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formElementConteiner=t._popupElement.querySelector(".popup-del__conteiner"),t}return t=a,(n=[{key:"handleSubmit",value:function(e){this._handleSubmitform=e}},{key:"setEventListeners",value:function(){var e=this;R(P(a.prototype),"setEventListeners",this).call(this),this._formElementConteiner.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitform()}))}}])&&O(t.prototype,n),a}(i);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".popup-image"),document.querySelector(".popup-image__foto");var I=document.querySelector(".profile__addit-button"),A=document.querySelector("#username"),B=document.querySelector("#occupation"),D=document.querySelector(".profile__add-button"),V=document.querySelector(".profile__icon"),N=document.querySelector(".profile__name"),z=document.querySelector(".profile__occupation"),U=document.querySelector(".profile__avatar"),H=new r({formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_invalid",inputErrorClass:"popup__state"}),J=new r({formSelector:".new-item-popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_invalid",inputErrorClass:"popup__input_state_invalid"});H.enableValidation(),J.enableValidation();var G=new E(".popup-image");G.setEventListeners();var M=new L({address:"https://mesto.nomoreparties.co/v1/cohort-19",token:"7a8e1597-631d-4e13-9c4a-d90c5bcc223b"}),$=new d({profileNameSelector:".profile__name",profileAboutSelector:".profile__occupation",avatar:".profile__avatar"}),F=new T(".popup-del",(function(){}));F.setEventListeners();var K=new p(".popup",(function(e){K.dataLoading(!0),M.updateInfo({about:e.occupation,name:e.username}).then((function(e){$.setUserInfo(e),N.textContent=e.name,z.textContent=e.about,K.close()})).catch((function(e){console.log(e)})).finally((function(){K.dataLoading(!1)}))}));Promise.all([M.getInfoAndAvatar(),M.getCards()]).then((function(e){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(n,r)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];N.textContent=i.name,z.textContent=i.about,U.src=i.avatar,K.setEventListeners(),I.addEventListener("click",(function(){$.getUserInfo(i),A.value=N.textContent,B.value=z.textContent,K.open()}));var c=new p(".new-item-popup",(function(e){c.dataLoading(!0),M.addNewCard({name:e.placename,link:e.linkpicture}).then((function(e){var t=u(e).render();s.addItem(t),c.close()})).catch((function(e){console.log(e)})).finally((function(){c.dataLoading(!1)}))}));function u(e){var n=new t(e,"#cards",(function(){G.open(e.link,e.name)}),(function(t){F.open(),F.handleSubmit((function(){M.deleteCard(e._id).then((function(){n.carddelete(t),F.close()})).catch((function(e){console.log(e)}))}))}),e.owner._id,i._id,e.likes,(function(){M.countLikeApi(e).then((function(e){n.addLikeOnRequest()})).catch((function(e){console.log(e)}))}),(function(){M.deleteLike(e).then((function(e){n.removeLikeOnRequest()})).catch((function(e){console.log(e)}))}));return n}c.setEventListeners(),D.addEventListener("click",(function(){c.open()}));var s=new y({renderer:function(e){var t=u(e).render();s.addItem(t,!0)}},".elements");s.renderItems(a)}));var Q=new p(".popup-avatar",(function(e){Q.dataLoading(!0),M.updateAvatar({avatar:e.linkavatar}).then((function(e){U.src=e.avatar,Q.close()})).catch((function(e){console.log(e)})).finally((function(){Q.dataLoading(!1)}))}));Q.setEventListeners(),V.addEventListener("click",(function(){return Q.open()}))})();