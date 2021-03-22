const str = 'Hallo Welt';

console.log(str);

(function () {
  const element = document.querySelector('button');
  console.log(element);
})();

document.addEventListener('DOMContentLoaded', function () {
  const element = document.querySelector('button');
  console.log(element);

  const div = document.createElement('div');
  div.innerText = 'Hallo Welt';
  document.body.appendChild(div);

  const names = ['Peter', 'Paul', 'Mary'];
  const container = document.createElement('div');
  names.forEach((name) => {
    const div = document.createElement('div');
    div.innerText = name;
    container.appendChild(div);
  });
  document.body.appendChild(container);
});
