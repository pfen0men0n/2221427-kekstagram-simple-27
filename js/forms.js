import {isEscKey} from './tools.js';
import {resetPictureScale} from './scale-edit.js';
import {resetEffects} from './effects-edit.js';
import {showSuccessMessage, showErrorMessage} from './alert-messages.js';
import { sendData } from './api.js';


const body = document.querySelector('body');
const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const uploadFileField = document.querySelector('#upload-file');
const submitButton = imageUploadForm.querySelector('.img-upload__submit');


const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text',
}, true);

const validateImageDescription = (value) =>
  value.length >= '20' && value.length <= '140';

pristine.addValidator(
  imageUploadForm.querySelector('#description'),
  validateImageDescription,
  'Длина комментария не менее 20 и не более 140 символов',
);

const onModalWindowEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeModalWindow();
  }
};

function openModalWindow () {
  imageUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalWindowEscKeydown);

}
function closeModalWindow () {
  resetPictureScale();
  resetEffects();
  imageUploadForm.reset();
  imageUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalWindowEscKeydown);

}

const onCloseButtonClick = () => {
  closeModalWindow();
};

const onUploadFileFieldChange = () => {
  openModalWindow();
};

uploadFileField.addEventListener('change', onUploadFileFieldChange);
cancelButton.addEventListener('click', onCloseButtonClick);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          showSuccessMessage();
          unBlockSubmitButton();
        },
        () => {
          showErrorMessage();
          unBlockSubmitButton();
          document.removeEventListener('keydown', onModalWindowEscKeydown);
        },
        new FormData(evt.target)
      );
    }
  });
};


export {
  openModalWindow,
  closeModalWindow,
  setUserFormSubmit,
  onModalWindowEscKeydown,
};
