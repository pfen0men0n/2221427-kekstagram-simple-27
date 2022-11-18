//константы текстов ошибок
const ALERT_TEXT = 'Не удалось загрузить данные с сервера';
const ERROR_TEXT = 'Не удалось загрузить. Попробуйте еще раз';

//импорты
import {showAlert} from './tools.js';

//функция получения данных с сервера
const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert(ALERT_TEXT);
    });};

//функция отправки данных на сервер
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
        onFail (ERROR_TEXT);
      }
    })
    .catch(() => {
      onFail (ERROR_TEXT);
    });
};

//экспорты
export {getData, sendData};
