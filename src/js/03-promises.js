// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const refs = {
  formRef: document.querySelector('.form'),
  firstDelayRef: document.querySelector('.form input[name="delay"]'),
  delayStepref: document.querySelector('.form input[name="step"]'),
  amountRef: document.querySelector('.form input[name="amount"]'),
  btnSubmitRef: document.querySelector('button'),
};

refs.formRef.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(e) {
  e.preventDefault();
  let counter = 0;
  counter += 1;
  let amount = refs.amountRef.value;

  if (counter > amount) {
    clearInterval(promiseID);
  }

  const promiseID = setInterval(createPromise, amount);
}

function createPromise() {}
