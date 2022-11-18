//константы для работы с валидатором текста описания в Pristine
const VALIDATE_DESCRIPTION_TEXT = 'Длина комментария не менее 20 и не более 140 символов';
const VALIDATE_DESCRIPTION_TEXT_MIN_LENGTH = '20';
const VALIDATE_DESCRIPTION_TEXT_MAX_LENGTH = '140';

//импорты
import {isEscKey} from './tools.js';
import {resetPictureScale} from './scale-edit.js';
import {resetEffects} from './effects-edit.js';
import {showSuccessMessagePopup, showErrorMessagePopup} from './alert-messages.js';
import { sendData } from './api.js';

//переменные для определения DOM элементов использующихся при работе с формами
const body = document.querySelector('body');
const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const uploadFileField = document.querySelector('#upload-file');
const submitButton = imageUploadForm.querySelector('.img-upload__submit');

//инициализация Pristine
const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text',
}, true);

//функция валидации текста описания для изображения
const validateImageDescription = (value) =>
  value.length >= VALIDATE_DESCRIPTION_TEXT_MIN_LENGTH && value.length <= VALIDATE_DESCRIPTION_TEXT_MAX_LENGTH;


pristine.addValidator(
  imageUploadForm.querySelector('#description'),
  validateImageDescription,
  VALIDATE_DESCRIPTION_TEXT,
);

//функция обработчик нажания на ESC при работе с формой
const onModalWindowEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    if (document.querySelector('.error') === null) {
      evt.preventDefault();
      closeModalWindow();
    }
  }
};

//функция открытия окна работы с загружаемым изображением
function openModalWindow () {
  imageUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalWindowEscKeydown);

}

//функция закрытия окна работы с загружаемым изображением
function closeModalWindow () {
  imageUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalWindowEscKeydown);
  resetPictureScale();
  resetEffects();
  imageUploadForm.reset();
}

//функция обработчик нажатия на кнопку закрытия окна работы с загружаемым изображением
const onCloseButtonClick = () => {
  closeModalWindow();
};

//функция обработчик нажатия на кнопку открытия оверлея выбора изображения для загрузки
const onUploadFileFieldChange = () => {
  openModalWindow();
};

//обработчики событий
uploadFileField.addEventListener('change', onUploadFileFieldChange);
cancelButton.addEventListener('click', onCloseButtonClick);

//функция блокировки кнопки отправки
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

//функция разблокировки кнопки отправки
const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

//функция сеттер отправки данных на сервер
const setUserFormSubmit = (onSuccess) => {
  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          showSuccessMessagePopup();
          unBlockSubmitButton();
        },
        () => {
          showErrorMessagePopup();
          unBlockSubmitButton();
        },
        new FormData(evt.target)
      );
    }
  });
};

//экспорты
export {
  openModalWindow,
  closeModalWindow,
  setUserFormSubmit,
  onModalWindowEscKeydown,
};
