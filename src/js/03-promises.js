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

    setTimeout(() => {
      if (shouldResolve) {
        resolve(objectPromise);
      } else {
        reject(objectPromise);
      }
    }, delay);
  });
}

function onSubmitHandler(e) {
  e.preventDefault();
  let delay = Number(delayRef.value);
  let amount = Number(amountRef.value);
  let step = Number(stepRef.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }

  e.target.reset();
}
