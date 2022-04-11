(()=>{"use strict";var e=document.querySelector(".popup__input-profile-name"),t=document.querySelector(".popup__input-profile-subname"),n=(document.querySelector(".popup__photo"),document.querySelector(".profile__button-edit")),r=document.querySelector(".profile__button-add"),o=document.querySelector(".photo-grid"),i=document.querySelector(".popup_profile"),u=document.querySelector(".popup_card-photo"),a=(document.querySelector(".popup_size-photo"),{templateCardSelector:".template",elementCardSelector:".element",deleteButtonCardSelector:".element__button-delete",imageCardSelector:".element__photo",subtitleCardSelector:".element__subtitle"}),s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__error-input_type",errorClass:"popup__input_active"};function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderCards",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItems",value:function(e){this._container.prepend(e)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeEsc=this._closeEsc.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.addEventListener("keydown",this._closeEsc)}},{key:"_closeEsc",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imageSizePhoto=t._popup.querySelector(".popup__photo"),t._popupImageName=t._popup.querySelector(".popup__photo-name"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImageName.textContent=e,this._imageSizePhoto.src=t,this._imageSizePhoto.alt=e,m(v(u.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function O(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e,t){var n,r=t.submitFormHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitFormHandler=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._popup.querySelectorAll(".popup__input")),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;g(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormHandler(e._getInputValues()),e.close()}))}},{key:"close",value:function(){g(j(u.prototype),"close",this).call(this),this._form.reset()}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.userNameProfile,r=t.userSubnameProfile;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._subname=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,subname:this._subname.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._subname.textContent=t}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.classList.add(r._errorClass),n.textContent=t})),q(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),q(this,"_checkInputValidaty",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),q(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),q(this,"_setSubmitButtonState",(function(){r._hasInvalidInput()?r.disableSubmitButton():r.enableSubmitButton()})),q(this,"disableSubmitButton",(function(){r._buttonElement.setAttribute("disabled",""),r._buttonElement.classList.add(r._inactiveButtonClass)})),q(this,"enableSubmitButton",(function(){r._buttonElement.removeAttribute("disabled"),r._buttonElement.classList.remove(r._inactiveButtonClass)})),q(this,"setEventListeners",(function(){r._setSubmitButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidaty(e),r._setSubmitButtonState()}))}))})),this._formElement=n,this._inputElement=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputElement)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValid",value:function(){var e=this;this._setSubmitButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n,r){var o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=function(){u._cardItem.remove(),u._cardItem=null},(o="_deleteCard")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._name=t.name,this._link=t.link,this._setups=n,this._templateCardSelector=n.templateCardSelector,this._cardItem=n.elementCard,this._sizePhoto=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateCardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_clickButtonLike",value:function(){this._likeButtonCard.classList.toggle("element__button-like_activ")}},{key:"_setEventListeners",value:function(){var e=this;this._likeButtonCard.addEventListener("click",(function(){return e._clickButtonLike()})),this._deleteButtonCardSelector.addEventListener("click",(function(){e._deleteCard()})),this._cardImage.addEventListener("click",(function(){e._sizePhoto(e._name,e._link)}))}},{key:"addNewCard",value:function(){return this._cardItem=this._getTemplate(),this._subtitleCardSelector=this._cardItem.querySelector(this._setups.subtitleCardSelector),this._cardImage=this._cardItem.querySelector(this._setups.imageCardSelector),this._likeButtonCard=this._cardItem.querySelector(".element__button-like"),this._deleteButtonCardSelector=this._cardItem.querySelector(this._setups.deleteButtonCardSelector),this._subtitleCardSelector.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._setEventListeners(),this._cardItem}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),z=new x(s,u),N=new x(s,i);z.setEventListeners(),N.setEventListeners();var V=new P(".popup_profile",{submitFormHandler:function(e){U.setUserInfo(e.name,e.profession)}});n.addEventListener("click",(function(){var n=U.getUserInfo(),r=n.name,o=n.subname;e.value=r,t.value=o,N.resetValid(),V.open()})),V.setEventListeners();var A=new P(".popup_card-photo",{submitFormHandler:function(e){var t=H({name:e.name,link:e.link});M.addItems(t)}});r.addEventListener("click",(function(){z.resetValid(),A.open()})),A.setEventListeners();var D=new S(".popup_size-photo");function F(e,t){D.open(e,t)}function H(e){return new T(e,a,F).addNewCard()}D.setEventListeners();var U=new I({userNameProfile:".profile__title",userSubnameProfile:".profile__subtitle"}),M=new l({renderer:function(e){var t=H(e);M.addItems(t)}},o);M.renderCards([{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}])})();