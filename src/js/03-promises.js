// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const refs = {
  firstDelayRef: document.querySelector('.form input[name="delay"]'),
  delayStepref: document.querySelector('.form input[name="step"]'),
  amountRef: document.querySelector('.form input[name="amount"]'),
  btnSubmitRef: document.querySelector('button'),
};

console.log(refs.btnSubmitRef);

refs.btnSubmitRef.addEventListener('submit', createPromise);
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

function onSubmitHandler() {}
