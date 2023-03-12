(()=>{"use strict";var e=document.querySelector(".page"),t=document.querySelector(".popup_type_open-image"),r=t.querySelector(".popup__image"),n=t.querySelector(".popup__image-title"),o=e.querySelector(".profile__edit-button"),i=e.querySelector(".popup__profile-edit_type_name"),u=e.querySelector(".popup__profile-edit_type_description"),l=e.querySelector(".popup__form_type_edit"),c=e.querySelector(".popup__form_type_add"),a=e.querySelector(".profile__add-button"),p={formSelector:".popup__form",inputSelector:".popup__profile-edit",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_inactive",inputErrorClass:"popup__profile-edit_type_error",errorClass:"popup__input-error_active"};function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_(n.key),n)}}function y(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t,r){return(t=_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}var b=y((function e(t,o,i){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"_getTemplate",(function(){return document.querySelector(u._templateSelector).content.querySelector(".cards__item").cloneNode(!0)})),m(this,"_switchLikeCard",(function(){u._likeButton.classList.toggle("cards__like-btn_active")})),m(this,"_removeCard",(function(){u._element.remove()})),m(this,"_addEventListener",(function(){u._likeButton.addEventListener("click",(function(){u._switchLikeCard()})),u._buttonRemoveCard.addEventListener("click",(function(){u._removeCard()})),u._cardImage.addEventListener("click",(function(){u._hundleCardClick(u._link,u._name)}))})),m(this,"generateCard",(function(){return u._element=u._getTemplate(),u._cardImage=u._element.querySelector(".cards__image"),u._cardImage.src=u._link,u._cardImage.alt=u._name,u._cardTitle=u._element.querySelector(".cards__subtitle"),u._cardTitle.textContent=u._name,u._likeButton=u._element.querySelector(".cards__like-btn"),u._buttonRemoveCard=u._element.querySelector(".cards__delete-btn"),u._addEventListener(),u._element})),this._name=t.name,this._link=t.link,this._hundleCardClick=i,this._templateSelector=o,this._popupImage=r,this._popupTitle=n}));function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,S(n.key),n)}}function h(e,t,r){return(t=S(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===d(t)?t:String(t)}var g=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"_setEventListener",(function(){n._buttonSubmit=n._formElement.querySelector(n._submitButtonSelector),n._toggleButtonState(),n._inputList.forEach((function(e){e.addEventListener("input",(function(){n._checkInputValidity(e),n._toggleButtonState()}))}))})),h(this,"_hasInvalidInput",(function(){return n._inputList.some((function(e){return!e.validity.valid}))})),h(this,"_checkInputValidity",(function(e){e.validity.valid?n._hideInputError(e):n._showInputError(e,e.validationMessage)})),h(this,"_showInputError",(function(e,t){var r=n._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(n._inputErrorClass),r.textContent=t,r.classList.add(n._errorClass)})),h(this,"_hideInputError",(function(e){var t=n._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(n._inputErrorClass),t.classList.remove(n._errorClass),t.textContent=""})),h(this,"resetSubmitButton",(function(){n._formElement.classList.contains("popup__form_type_edit")?(n._buttonSubmitElement.classList.remove(n._inactiveButtonClass),n._buttonSubmitElement.disabled=!1):(n._buttonSubmitElement.classList.add(n._inactiveButtonClass),n._buttonSubmitElement.disabled=!0)})),this._formElement=r,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(r.querySelectorAll(this._inputSelector)),this._buttonSubmitElement=r.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonSubmitElement.classList.add(this._inactiveButtonClass),this._buttonSubmitElement.disabled=!0):(this._buttonSubmitElement.classList.remove(this._inactiveButtonClass),this._buttonSubmitElement.disabled=!1)}},{key:"resetValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,k(n.key),n)}}function k(e){var t=function(e,t){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===w(t)?t:String(t)}var P=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.closePopup()},(n=k(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(t),this._popupCloseButton=this._popup.querySelector(".popup__close")}var t,r;return t=e,(r=[{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.closest(".popup__overlay")||e.closePopup()})),this._popupCloseButton.addEventListener("click",(function(){return e.closePopup()}))}},{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},C.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(n);if(o){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.popupSelector,n=e.callbackFunction;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r))._callbackSubmitform=n,t._popupForm=t._popup.querySelector(".popup__form"),t._inputList=Array.from(t._popupForm.querySelectorAll(".popup__profile-edit")),t}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formList={},this._inputList.forEach((function(t){e._formList[t.name]=t.value})),this._formList}},{key:"setEventListeners",value:function(){var e=this;C(I(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._callbackSubmitform(e._getInputValues()),e._resetForm()}))}},{key:"_resetForm",value:function(){this._popupForm.classList.contains("popup__form_type_add")&&this._popupForm.reset()}},{key:"closePopup",value:function(){C(I(u.prototype),"closePopup",this).call(this)}}])&&O(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(P);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}var R=function(){function e(t,r){var n=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=n,this._renderer=o,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"addItem",value:function(e){this._renderer(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===x(o)?o:String(o)),n)}var o}var V=function(){function e(t){var r=t.profileName,n=t.profileTitle;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(r),this._profileTitle=document.querySelector(n)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,description:this._profileTitle.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,r=e.description;this._profileName.textContent=t,this._profileTitle.textContent=r}}])&&F(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},U.apply(this,arguments)}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(n);if(o){var r=z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImageElement=t._popup.querySelector(".popup__image"),t._popupTitleElement=t._popup.querySelector(".popup__image-title"),t}return t=u,(r=[{key:"openPopup",value:function(e,t){this._popupImageElement.src=e,this._popupImageElement.alt=t,this._popupTitleElement.textContent=t,U(z(u.prototype),"openPopup",this).call(this)}}])&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(P);new g(p,l).enableValidation();var G=new g(p,c);G.enableValidation();var H=new V({profileName:".profile__name",profileTitle:".profile__subtitle"}),J=new q({popupSelector:".popup_type_edit",callbackFunction:function(e){J.closePopup(),H.setUserInfo(e)}});J.setEventListeners();var K=new q({popupSelector:".popup_type_add-item",callbackFunction:function(e){W.addItem(e),K.closePopup()}});function Q(e,t){var r=new M(".popup_type_open-image");r.openPopup(e,t),r.setEventListeners()}K.setEventListeners();var W=new R({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].reverse(),renderer:function(e){var t=new b(e,"#cards-template",Q).generateCard();W.setItem(t)}},".cards__list");W.renderItems(),o.addEventListener("click",(function(e){e.preventDefault(),i.value=H.getUserInfo().name,u.value=H.getUserInfo().description,J.openPopup()})),a.addEventListener("click",(function(){G.resetSubmitButton(),K.openPopup()}))})();