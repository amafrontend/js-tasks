// #2
// Необходимо реализовать функцию fetchWithRetry, которая
// Асинхронно выполняет GET-запрос по указанному URL с использованием Fretch API
// Возвращает данные в формате JSON
// Использует только Promise API (без async / await)
// При возникновении ошибки выполняет повторные попытки (максимум 5 раз)
// Если после всех попыток получить данные не удалось, возвращает ошибку "заданный URL недоступен"

function fetchWithRetry(url, retries = 5) {

  return fetch(url)
    .then((response) => {
      return resolve(response.json())
    },
    // (error) => {
    //   if(retries > 1) {
    //     return fetchWithRetry(url, retries--);
    //   }
    //   throw new Error("заданный URL недоступен");
    // }
    )
    .catch(error => {
      if(retries > 1) {
        return fetchWithRetry(url, retries--);
      }
      throw new Error("заданный URL недоступен");
    });
}

fetchWithRetry('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log('Успешно', data))
  .catch(error => console.error('Ошибка', error.message));

