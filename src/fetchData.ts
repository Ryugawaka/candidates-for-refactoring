// добавил возможность передавать свой таймаут
const DEFAULT_TIMEOUT = 5000;

function fetchData(url: string, timeout?: number) {
  // Используем значение по умолчанию для таймаута
  fetch(url, { timeout: timeout || DEFAULT_TIMEOUT })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}
