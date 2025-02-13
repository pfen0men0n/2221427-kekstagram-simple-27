const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const stringLength = (string, maxlenght) => string.length <= maxlenght;
stringLength('wwww', 12);

const isEscKey = (evt) => evt.key === 'Escape';


export {
  getRandomPositiveInteger,
  getRandomArrayElement,
  isEscKey
};
