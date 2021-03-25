import './list.js';
import './form.js';

document.addEventListener('DOMContentLoaded', () => {
  const pwList = document.querySelector('pw-list');
  const pwForm = document.querySelector('pw-form');

  pwList.addEventListener('edit', (e) => {
    pwForm.setAttribute('id', e.detail.id);
    pwList.style.display = 'none';
    pwForm.style.display = 'block';
  });

  pwForm.addEventListener('save', (e) => {
    pwList.setAttribute('update', Date.now());
    pwList.style.display = 'block';
    pwForm.style.display = 'none';
  });

  document.getElementById('new').addEventListener('click', () => {
    pwForm.setAttribute('id', '');
    pwList.style.display = 'none';
    pwForm.style.display = 'block';
  });
});
