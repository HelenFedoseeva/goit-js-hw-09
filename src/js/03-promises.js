// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const refs = {
  formRef: document.querySelector('.form'),
  firstDelayRef: document.querySelector('.form input[name="delay"]'),
  delayStepref: document.querySelector('.form input[name="step"]'),
  amountRef: document.querySelector('.form input[name="amount"]'),
  btnSubmitRef: document.querySelector('button'),
};

let amount = null;
let position = 0;
let counter = 0;
let delay = refs.firstDelayRef + refs.delayStepref.value;
let firstDelay = refs.firstDelayRef.value;

refs.formRef.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(event) {
  event.preventDefault();
  amount = refs.amountRef.value;
  const delay = refs.delayStepref.value;
  counter += 1;

  if (counter > amount) {
    return;
  }

  setInterval(createPromise(position, delay), firstDelay);
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    position += 1;
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve;
    } else {
      reject;
    }
  });
  return promise;
}

createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
