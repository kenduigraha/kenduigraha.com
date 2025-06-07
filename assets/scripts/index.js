const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;
  let firstErrorElement = null;

  const fields = [
    { id: 'first-name', message: 'First name is required' },
    { id: 'last-name', message: 'Last name is required' },
    { id: 'email', message: 'Valid email is required', type: 'email' },
    { id: 'message', message: 'Message is required' },
  ];

  fields.forEach(({ id, message, type }) => {
    const input = document.getElementById(id);
    const error = document.getElementById(`${id}-error`);
    const value = input.value.trim();

    if (!value || (type === 'email' && !/\S+@\S+\.\S+/.test(value))) {
      error.textContent = message;
      error.style.display = 'block';
      input.classList.add('input-error');

      if (!firstErrorElement) {
        firstErrorElement = input;
      }

      valid = false;
    } else {
      error.textContent = '';
      error.style.display = 'none';
      input.classList.remove('input-error');
    }
  });

  if (!valid && firstErrorElement) {
    firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  if (valid) {
    alert('Form submitted successfully!');
  }
});
