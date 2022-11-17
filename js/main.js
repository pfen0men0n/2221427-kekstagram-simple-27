import {renderPhotos} from './thumbnail-pictures.js';
import {getData} from './api.js';
import {closeModalWindow, setUserFormSubmit} from './forms.js';

getData((photos) => {
  renderPhotos(photos);
});
setUserFormSubmit(closeModalWindow);
