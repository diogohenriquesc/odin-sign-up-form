const inputPassword = document.querySelector('#password');
const inputConfirmPassword = document.querySelector('#confirm_password');

inputPassword.addEventListener('input', checkInputs)
inputConfirmPassword.addEventListener('input', checkInputs);

function checkInputs() {
  if (inputPassword.value != null && inputPassword.value === inputConfirmPassword.value) {
    inputPassword.setCustomValidity('');
    inputConfirmPassword.setCustomValidity('');
  } else {
    inputPassword.setCustomValidity('Invalid field.');
    inputConfirmPassword.setCustomValidity('Invalid field.');
  }
}