//импорты
import {isEscKey} from './tools.js';

//переменные для определения DOM элементов использующихся при работе с попапами не/удачной загрузки фото
const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const successButton = successMessage.querySelector('.success__button');
const errorButton = errorMessage.querySelector('.error__button');

//переменная для работы с клонированными узлами DOM
let typeMessage;

//фенкция обработчик нажатия на ESC при активном попапе не/удачной загрузки фото
const onErrorSussessPopupEscKeydown = (evt) => {
  if(isEscKey(evt)) {
    closeErrorSuccessPopup();
  }
};

//функция обработчик закрытия по клику попапа не/удачной загрузки фото
const onErrorSuccessPopupClose = (evt) => {
  if (evt.target === typeMessage) {
    closeErrorSuccessPopup();
  }
};

//функция обработчик закрытия попапа
function closeErrorSuccessPopup() {
  typeMessage.remove();
  document.removeEventListener('keydown', onErrorSussessPopupEscKeydown);
  document.removeEventListener('click',onErrorSuccessPopupClose);
}

//функция показа попапа об успешной отправке фото
const showSuccessMessagePopup = () => {
  typeMessage = successMessage;
  document.body.append(successMessage);
  successButton.addEventListener('click', closeErrorSuccessPopup);
  document.addEventListener('keydown', onErrorSussessPopupEscKeydown);
  document.addEventListener('click', onErrorSuccessPopupClose);
};

//функция показа попапа о неудачной отправке фото
const showErrorMessagePopup = () => {
  typeMessage = errorMessage;
  document.body.append(errorMessage);
  errorButton.addEventListener('click', closeErrorSuccessPopup);
  document.addEventListener('keydown', onErrorSussessPopupEscKeydown);
  document.addEventListener('click', onErrorSuccessPopupClose);
};

//экспорты
export {showSuccessMessagePopup, showErrorMessagePopup};
