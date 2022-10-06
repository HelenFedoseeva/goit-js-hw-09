// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const startBtnRef = document.querySelector('button');
const timerRef = document.querySelector('.timer');
const dayesRef = timerRef.querySelector('span[data-days]');
const hoursRef = timerRef.querySelector('span[data-hours]');
const minutesRef = timerRef.querySelector('span[data-minutes]');
const secondsRef = timerRef.querySelector('span[data-seconds]');

startBtnRef.setAttribute('disabled', true);

let choosedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    choosedDate = selectedDates[0];
    const ourDate = Date.now();

    if (selectedDates[0] <= ourDate) {
      alert('Please choose a date in the future');
    }

    startBtnRef.removeAttribute('disabled', true);
  },
};

flatpickr('#datetime-picker', options);

startBtnRef.addEventListener('click', onStartClickHandler);

function onStartClickHandler() {
  const timerID = setInterval(() => {
    const currentDate = Date.now();
    const calculatedTime = choosedDate - currentDate;
    const remainigTime = convertMs(calculatedTime);
    console.log(remainigTime);
    if (
      remainigTime.days === '00' &&
      remainigTime.hours === '00' &&
      remainigTime.minutes === '00' &&
      remainigTime.seconds === '00'
    ) {
      clearInterval(timerID);
    }
    handOverTheDate(remainigTime);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function handOverTheDate({ days, hours, minutes, seconds }) {
  // if (days === '00' || hours === '00' || minutes === '00' || seconds === '00') {
  //   return;
  // }
  dayesRef.textContent = days;
  hoursRef.textContent = hours;
  minutesRef.textContent = minutes;
  secondsRef.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
