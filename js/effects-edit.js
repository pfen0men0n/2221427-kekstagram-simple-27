//константа устанавливающая список эффектов и их настроек для наложения на изображение
const EFFECTS_LIST = [
  {name: 'none', min: 0, max: 100, step: 1, start: 100,},
  {name: 'chrome', style: 'grayscale', min: 0, max: 1, step: 0.1, unit : '',},
  {name: 'sepia', style: 'sepia', min: 0, max: 1, step: 0.1, unit : '',},
  {name: 'marvin', style: 'invert', min: 0, max: 100, step: 1, unit : '%',},
  {name: 'phobos', style: 'blur', min: 0, max: 3, step: 0.1, unit : 'px',},
  {name: 'heat', style: 'brightness', min: 1, max: 3, step: 0.1, unit : '',}
];

//константа устанавливающая эффект по умолчанию
const DEFAULT_EFFECT = EFFECTS_LIST[0];

//переменные для определения DOM элементов использующихся при работе с наложением эффектов на редактируемое изображение
const picturePreview = document.querySelector('.img-upload__preview');
const form = document.querySelector('.img-upload__form');

//переменная определяющая выбранный эффект
let chosenEffect = DEFAULT_EFFECT;

//функция сбрасывающая все эффекты
const resetEffects = () => {
  picturePreview.classList.remove(`effects__preview--${chosenEffect.name}`);
};

//функция обработчик изменяющая налагаемый на фото эффект
const onFormChange = (evt) => {
  if(!evt.target.classList.contains('effects__radio')){
    return;
  }
  resetEffects();
  chosenEffect = EFFECTS_LIST.find((effect) => effect.name === evt.target.value);
  picturePreview.classList.add(`effects__preview--${chosenEffect.name}`);
};

//обработчик событий
form.addEventListener('change', onFormChange, resetEffects);

//экспорты
export {resetEffects};
