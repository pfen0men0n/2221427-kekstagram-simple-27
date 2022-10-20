/*
const getRandomPositiveInteger = (min, max) => { // Объявляем функцию по поиску случайного числа из переданного диапазона
  if (min < 0 || max < 0 || min === max) { // Прописываем условие, чтобы возвращалось 'NaN' если один из аргументов отрицательное число, а так же строгое неравенство без приведения типов.
    return 'NaN'; // Выводим 'NaN' если есть условия для его вывода.
  } let swap; // Замена переменной swap, чтобы заменить аргументы, если минимальное значение больше максимального
  if (min > max) {min = swap; min = max; swap = max;
  }
  return Math.round(Math.random() * (max - min + 1) + min); // Добавляем функцию для выведения значения числа, округленного до нижнего предела, потому что функция math.random выводит случайное число с плавающей запятой.

};
getRandomPositiveInteger(0, 25);
Функцию не используем, так как она в некоторых значениях объекта возвращает undefined
*/

// Используем функцию от Кекса

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const stringLenght = (string, maxlenght) => {
  const result = string.length <= maxlenght;
  return result;

};
stringLenght('');


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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhotoObject = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION_ARRAY),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const similarPhotoArray = Array.from({length: TOTAL_PHOTO_DOWNLOADED}, (x, index) => createPhotoObject(index));

// eslint-disable-next-line no-console
console.log(similarPhotoArray);
