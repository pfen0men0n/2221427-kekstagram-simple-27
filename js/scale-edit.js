const smallerScaleButton = document.querySelector('.scale__control--smaller'); //объявляем переменную для кнопки уменьшения масштаба
const biggerScaleButton = document.querySelector('.scale__control--bigger'); //объявляем переменную для кнопки увеличения масштаба
const scaleFieldValue = document.querySelector('.scale__control--value'); //объявляем переменную для поля отображения значения между кнопками
const image = document.querySelector('.img-upload__preview'); //объявляем переменную в которую записан элемент выводящий превью картинки

const DEFAULT_SCALE_VALUE = 100; //объявляем константу в которой задано значение масштаба по умолчанию
const STEP_SCALE_VALUE = 25; //объявляем константу в которой задана величина шага
const MIN_SCALE_VALUE = 25; //объявляем константу в которой задано минимально допустимое значение масштаба
const MAX_SCALE_VALUE = 100; //объявляем константу в которой задано максимально допустимое значение масштаба

const imagePreviewScale = (value = DEFAULT_SCALE_VALUE) => { //объявляем функцию в которой объявляем значение равное константе значения по умолчанию
  image.style.transform = `scale(${value / 100})`; //обращаемся к свойству трансформ элемента previewImage, используем для этого функцию scale в которой значение делим на 100
  scaleFieldValue.value = `${value}%`; //полученное значение записываем в поле ввода, то что между кнопками плюс и минус
};

const onSmallerScaleButtonClick = () => { //Объявляем функцию для вычесления уменьшения значения при клике на кнопку увеличения
  const currentValue = parseInt(scaleFieldValue.value, 10); //в переменную "текущего значения" записываем методом "parseInt" "текущее знаение!!! поля" масштаба в "десятичном формате"
  let newValue = currentValue - STEP_SCALE_VALUE; //в переменную "newValue" записываем новое значение путем прибавления к текущему значению значения "константы шага"
  if (newValue < MIN_SCALE_VALUE) { //добавляем услоие проверку, если "новое знаение" поля больше "максимально допустимого значения"
    newValue = MIN_SCALE_VALUE; //то "новому значению" присваиваем значение "максимально допустимого знаения"
  }
  imagePreviewScale(newValue); //вызываем функцию изменения "масштаба изображения" записывая в нее арумент значения "текущего значения" полученного в фенкции onBiggerScaleButtonClick

};

const onBiggerScaleButtonClick = () => { //Объявляем функцию для вычесления увеличения значения при клике на кнопку увеличения
  const currentValue = parseInt(scaleFieldValue.value, 10); //в переменную "текущего значения" записываем методом "parseInt" "текущее знаение!!! поля" масштаба в "десятичном формате"
  let newValue = currentValue + STEP_SCALE_VALUE; //в переменную "newValue" записываем новое значение путем прибавления к текущему значению значения "константы шага"
  if (newValue > MAX_SCALE_VALUE) { //добавляем услоие проверку, если "новое знаение" поля больше "максимально допустимого значения"
    newValue = MAX_SCALE_VALUE; //то "новому значению" присваиваем значение "максимально допустимого знаения"
  }
  imagePreviewScale(newValue); //вызываем функцию изменения "масштаба изображения" записывая в нее арумент значения "текущего значения" полученного в фенкции onBiggerScaleButtonClick
};

const resetPictureScale = () => { //объявляем функцию сброса масштаба изображения в которой вызываем функцию imagePreviewScale без арументов таким образом она будет менять размер картинки при измененеии масштаба ,а при закрытии и потом открытии новой картинки сбрасывать значение на "по умолчанию"
  imagePreviewScale();
};

biggerScaleButton.addEventListener('click', onBiggerScaleButtonClick); // вешаем обработчик события клика на кнопку увеличения масштаба картинки
smallerScaleButton.addEventListener('click', onSmallerScaleButtonClick); //вешаем обработчик события клика на кнопку уменьшения масштаба картинки

export {resetPictureScale}; //экспортируем функцию, будем импортировать в главном модуле
