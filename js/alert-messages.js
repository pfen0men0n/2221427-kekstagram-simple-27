import {isEscKey} from './tools.js';
import {onModalWindowEscKeydown} from './forms.js';

const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const successButton = successMessage.querySelector('.success__button');
const errorButton = errorMessage.querySelector('.error__button');

let typeMessage;

const onErrorEscKeydown = (evt) => {
  if(isEscKey(evt)) {
    closeAlertMessage();
    document.addEventListener('keydown', onModalWindowEscKeydown, true);
  }
};

const onMessageClose = (evt) => {
  if (evt.target === typeMessage) {
    closeAlertMessage();
  }
};

function closeAlertMessage() {
  typeMessage.remove();
  document.removeEventListener('keydown', onErrorEscKeydown, true);
  document.removeEventListener('click',onMessageClose);
}

const showSuccessMessage = () => {
  typeMessage = successMessage;
  document.body.append(successMessage);
  successButton.addEventListener('click', closeAlertMessage);
  document.addEventListener('keydown', onErrorEscKeydown, true);
  document.addEventListener('click', onMessageClose);
};

const showErrorMessage = () => {
  typeMessage = errorMessage;
  document.body.append(errorMessage);
  errorButton.addEventListener('click', closeAlertMessage);
  document.addEventListener('keydown', onErrorEscKeydown, true);
  document.addEventListener('click', onMessageClose);
};

export {showSuccessMessage, showErrorMessage};
