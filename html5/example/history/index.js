document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  button.addEventListener('click', (e) => {
    const id = e.target.id;
    history.pushState({ id }, 'title', `/edit/${id}`);
  });
});

window.onpopstate = (e) => {
  if (e.state?.id) {
    console.log('fetching data with id: ', e.state.id);
  }
};
