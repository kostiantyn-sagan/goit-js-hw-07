const counterValueEl = document.querySelector('#value');
const actions = document.querySelectorAll('#counter button');

let counterValue = 0;

function increment(event) {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}

function decrement(event) {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

actions[0].addEventListener('click', decrement);
actions[1].addEventListener('click', increment);
