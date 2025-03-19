document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => input.value = '');

      submitButton.classList.add('active');

      setTimeout(function () {
        submitButton.classList.remove('active');
      }, 1000);
  });
});