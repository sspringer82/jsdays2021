document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    history.pushState('data', 'title', 'url');
  });
});

window.onpopstate = (e) => {
  console.log(e);
};
