import {getRandomPositiveInteger} from './tools.js';
import {getRandomArrayElement} from './tools.js';

const PHOTO_DESCRIPTION_ARRAY = [
  'Супер фото!',
  'Ну нет, горизонт то завален...',
  'Ой, а что тут с освещением случилось?',
  'Видишь на фотке кота, и я нет. А он есть!',
  'Все не то...',
  'А тут, такое ощущение, что снимали на камеру домофона!',
  'Отличный кадр, вот прям эталонная работа, и свет и тени, и люди смотрят прямо в кадр. Продложай в том же духе!',
  'Котоселфи? М-м-м  прикольно!',
];
const TOTAL_PHOTO_DOWNLOADED = 25;

const createPhotoObject = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION_ARRAY),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const createPhotos = () => Array.from({length: TOTAL_PHOTO_DOWNLOADED}, (_x, index) => createPhotoObject(index));
export {createPhotos,
  TOTAL_PHOTO_DOWNLOADED
};

