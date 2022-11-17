import {showAlert} from './tools.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные с сервера');
    });};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail ('Не удалось загрузить. Попробуйте еще раз');
      }
    })
    .catch(() => {
      onFail ('Не удалось загрузить. Попробуйте еще раз');
    });
};

export {getData, sendData};
