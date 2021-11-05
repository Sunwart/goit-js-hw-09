import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
}

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', createAllPromises);

function createAllPromises(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  if (amount.value <= 0) {
    window.alert('Amount should be a positive number!');
    return;
  }
  if (delay.value < 0 || step.value < 0) {
    window.alert('Delay can not be a negative number!');
    return;
  }

  let currentDelay = Number(delay.value);
  for (let i = 1; i <= Number(amount.value); i += 1) {
    createPromise(i, currentDelay);
    currentDelay += Number(step.value);
  }
}
