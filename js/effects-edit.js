const EFFECTS_LIST = [
  {name: 'none', min: 0, max: 100, step: 1, start: 100,},
  {name: 'chrome', style: 'grayscale', min: 0, max: 1, step: 0.1, unit : '',},
  {name: 'sepia', style: 'sepia', min: 0, max: 1, step: 0.1, unit : '',},
  {name: 'marvin', style: 'invert', min: 0, max: 100, step: 1, unit : '%',},
  {name: 'phobos', style: 'blur', min: 0, max: 3, step: 0.1, unit : 'px',},
  {name: 'heat', style: 'brightness', min: 1, max: 3, step: 0.1, unit : '',}
];

const DEFAULT_EFFECT = EFFECTS_LIST[0];

const picturePreview = document.querySelector('.img-upload__preview');
const form = document.querySelector('.img-upload__form');

let chosenEffect = DEFAULT_EFFECT;

const resetEffects = () => {
  picturePreview.classList.remove(`effects__preview--${chosenEffect.name}`);
};

const onFormChange = (evt) => {
  if(!evt.target.classList.contains('effects__radio')){
    return;
  }
  resetEffects();
  chosenEffect = EFFECTS_LIST.find((effect) => effect.name === evt.target.value);
  picturePreview.classList.add(`effects__preview--${chosenEffect.name}`);
};

form.addEventListener('change', onFormChange, resetEffects);

export{resetEffects};
