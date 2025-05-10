// Необходимо реализовать проверку решения задачи по двум независимым сервисам с использованием функции checkResult, которая:

// Принимает URL сервиса и решение задачи

// Возвращает Promise<boolean>, указывающий на правильность решения

// Требуется обработать результаты следующим образом:

// Если оба запроса вернули true - вывести "success"

// Если хотя бы один вернул false - вывести "fail"

// Если хотя бы один запрос вернул ошибку (rejected) - вывести "error"

// Если хотя бы один запрос выполняется дольше 1 секунды - вывести "timeout"

const checkResult = (url, solution) => {
  // Имитируем различные сценарии в зависимости от URL
  if (url === 'fast_true') {
    return Promise.resolve(true);
  }

  if (url === 'fast_false') {
    return Promise.resolve(false);
  }

  if (url === 'slow_true') {
    return new Promise(resolve => setTimeout(() => resolve(true), 1500));
  }

  if (url === 'error') {
    return Promise.reject(new Error('Connection failed'));
  }
  return Promise.resolve(false);
};

async function testScenario(url1, url2) {
  const firstRequest = checkResult(url1, 'solution');
  const secondRequest = checkResult(url2, 'solution');

  try {
    const combinePromises = Promise.all([firstRequest, secondRequest]);

    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('timeout'));
      }, 1000);
    });

    const resultPromises = await Promise.race([combinePromises, timeoutPromise]);

    if (resultPromises.some(responseItem => !responseItem)) {
      console.log('fail');
    } else {
      console.log('success');
    }
  } catch (error) {
    if (error.message === 'timeout') {
      console.log('timeout');
    } else {
      console.log('error');
    }
  }
}

// Тестовые сценарии
async function runTests() {
  // 1. Оба быстрых и верных // success
  await testScenario('fast_true', 'fast_true');

  // 2. Один верный, один неверный // fail
  await testScenario('fast_true', 'fast_false');

  // 3. Один верный, один с ошибкой // error
  await testScenario('fast_true', 'error');

  // 4. Один верный, один с таймаутом // timeout
  await testScenario('fast_true', 'slow_true');

  // 5. Оба с таймаутом // timeout
  await testScenario('slow_true', 'slow_true');

  // 6. Оба с ошибкой // error
  await testScenario('error', 'error');
}

runTests();
