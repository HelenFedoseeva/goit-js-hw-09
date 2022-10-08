import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
// console.log(formRef);

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
  });
}

function onSubmitHandler(e) {
  e.preventDefault();
  console.log(123);
  let delay = e.target.delay.value;
  let amount = e.target.amount.value;
  let step = e.target.step.value;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(2, 1500)
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
    delay += step;
  }
}
