const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const field = event.target.name;

  formData[field] = event.target.value;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: formData.email.trim(),
      message: formData.message.trim(),
    })
  );
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    alert('Fill please all fields');
    return;
  }

  console.log({
    email: formData.email.trim(),
    message: formData.message.trim(),
  });

  localStorage.removeItem(STORAGE_KEY);

  form.reset();

  formData.email = '';
  formData.message = '';
});