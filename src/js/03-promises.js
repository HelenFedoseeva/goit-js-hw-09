import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const amountRef = document.querySelector('input[name="amount"]');
const delayRef = document.querySelector('input[name="delay"]');
const stepRef = document.querySelector('input[name="step"]');

formRef.addEventListener('submit', onSubmitHandler);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const objectPromise = { position, delay };

    if (shouldResolve) {
      resolve(objectPromise);
    } else {
      reject(objectPromise);
    }

    // delay += step;
  });
}

function onSubmitHandler(e) {
  e.preventDefault();
  let delay = delayRef.value;
  let amount = amountRef.value;
  let step = stepRef.value;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        }, delay);
      });
    // Number((delay += step));
  }
  // delay += step;
}
