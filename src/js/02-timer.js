// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const startBtnRef = document.querySelector('button');
const timerRef = document.querySelector('.timer');
const dayesRef = timerRef.querySelector('span[data-days]');
const hoursRef = timerRef.querySelector('span[data-hours]');
const minutesRef = timerRef.querySelector('span[data-minutes]');
const secondsRef = timerRef.querySelector('span[data-seconds]');

startBtnRef.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentDate = new Date();
    if (selectedDates[0] <= currentDate) {
      alert('Please choose a date in the future');
    }

    startBtnRef.removeAttribute('disabled', true);
    startBtnRef.addEventListener('click', () => {
      const calculatedTime = selectedDates[0] - currentDate;
      const remainigTime = convertMs(calculatedTime);
      console.log(remainigTime);
      handOverTheDate(remainigTime);
    });
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function handOverTheDate({ days, hours, minutes, seconds }) {
  // if (String(days).length <= 1) {
  //   console.log(addLeadingZero(days));
  //   return days;
  // }
  dayesRef.textContent = days;
  hoursRef.textContent = hours;
  minutesRef.textContent = minutes;
  secondsRef.textContent = seconds;
}

// function addLeadingZero(value) {
//   const valueStr = String(value);
//   let timerNumber;
//   if (valueStr.length <= 1) {
//     timerNumber = valueStr.padStart(2, '0');
//   }
//   return timerNumber;
// }
