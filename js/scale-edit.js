//константы определяющие параметры определенные параметры при работе с масштабои изображения
const DEFAULT_SCALE_VALUE = 100;
const STEP_SCALE_VALUE = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;

//переменные для определения DOM элементов использующихся при работе с масштабом избражения загружамого пользователем
const smallerScaleButton = document.querySelector('.scale__control--smaller');
const biggerScaleButton = document.querySelector('.scale__control--bigger');
const scaleFieldValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');

//функция вносящая изменения в масштабе в превью изображения
const imagePreviewScale = (value = DEFAULT_SCALE_VALUE) => {
  image.style.transform = `scale(${value / 100})`;
  scaleFieldValue.value = `${value}%`;
};

//функция обработчик изменения масштаба при клике на кнопку уменьшения
const onSmallerScaleButtonClick = () => {
  const currentValue = parseInt(scaleFieldValue.value, 10);
  let newValue = currentValue - STEP_SCALE_VALUE;
  if (newValue < MIN_SCALE_VALUE) {
    newValue = MIN_SCALE_VALUE;
  }
  imagePreviewScale(newValue);

};


//функция обработчик изменения масштаба при клике на кнопку увеличения
const onBiggerScaleButtonClick = () => {
  const currentValue = parseInt(scaleFieldValue.value, 10);
  let newValue = currentValue + STEP_SCALE_VALUE;
  if (newValue > MAX_SCALE_VALUE) {
    newValue = MAX_SCALE_VALUE;
  }
  imagePreviewScale(newValue);
};

//функция сброса масштаба изображения
const resetPictureScale = () => {
  imagePreviewScale();
};

//обработчики событий
biggerScaleButton.addEventListener('click', onBiggerScaleButtonClick);
smallerScaleButton.addEventListener('click', onSmallerScaleButtonClick);

//экспорты
export {resetPictureScale};
