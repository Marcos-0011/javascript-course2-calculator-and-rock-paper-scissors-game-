let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

displayCalculation();

function updateCalculation(value) {
  calculation += `${value}`;
  displayCalculation();

  localStorage.setItem('calculation', JSON.stringify(calculation));
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = `${calculation}`;
}
