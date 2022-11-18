//константа устанавливающая время показа уведомления
const ALER_SHOW_TIME = 5000;

//функция по поиску случайного целого положительного чиста из определенного диапазона чисел
const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//функция получения случайного эелемента массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//функция определения длины строки
const stringLength = (string, maxlenght) => string.length <= maxlenght;
stringLength('wwww', 12);

//функция определения нажатия на ESC
const isEscKey = (evt) => evt.key === 'Escape';

//функция показа плашки уведомления об ошибке
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALER_SHOW_TIME);
};

//экспорты
export {
  getRandomPositiveInteger,
  getRandomArrayElement,
  isEscKey,
  showAlert
};
