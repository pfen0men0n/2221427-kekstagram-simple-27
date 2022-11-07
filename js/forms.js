import {isEscKey} from './tools.js';

const body = document.querySelector('body');
const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const uploadFileField = document.querySelector('#upload-file');


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


imageUploadForm.addEventListener('submit', () => {
  // evt.preventDefault();
  pristine.validateImageDescription();
});
// const isValid = pristine.validate();
// if (isValid) {
//   // eslint-disable-next-line no-console
//   console.log('Можно отправлять');
// } else {
//   // eslint-disable-next-line no-console
//   console.log('Форма невалидна');
// }


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

const onImageUploadFormSubmit = () => {
  // evt.preventDefault();
  // pristine.validate();
};

uploadFileField.addEventListener('change', onUploadFileFieldChange);
cancelButton.addEventListener('click', onCloseButtonClick);
imageUploadForm.addEventListener('submit', onImageUploadFormSubmit);

export {
  openModalWindow,
  closeModalWindow
};
