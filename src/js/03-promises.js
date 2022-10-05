// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const refs = {
  firstDelayRef: document.querySelector('.form input[name="delay"]'),
  delayStepref: document.querySelector('.form input[name="step"]'),
  amountRef: document.querySelector('.form input[name="amount"]'),
  btnSubmitRef: document.querySelector('button'),
};

let AMOUNT = null;

refs.btnSubmitRef.addEventListener('submit', onSubmitHandler);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log('Это лог удачного промиса');
  } else {
    console.log('это лог неудачного промиса');
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

function onSubmitHandler() {
  AMOUNT = refs.amountRef.value;
  const delay = refs.delayStepref.value;

  const promiseID = setInterval(createPromise(position, delay), AMOUNT);
}
