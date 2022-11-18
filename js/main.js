//импорты
import {renderPhotos} from './thumbnail-pictures.js';
import {getData} from './api.js';
import {closeModalWindow, setUserFormSubmit} from './forms.js';

//функция по отрисовке пользовательских изображений на главной странице и сеттер формы
getData((photos) => {
  renderPhotos(photos);
});
setUserFormSubmit(closeModalWindow);
