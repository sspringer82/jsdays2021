import model from './model.js';
import copyToClipboard from './clipboard.js';

class List extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById('listTemplate');
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(templateContent.cloneNode(true));

    this.buildTable(shadowRoot);
  }

  static get observedAttributes() {
    return ['update'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'update':
        this.buildTable(this.shadowRoot);
        break;
    }
  }

  async buildTable(shadowRoot) {
    const tableContainer = shadowRoot.getElementById('list');
    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    (await model.getAllElements()).forEach((rowData) =>
      this.createRow(rowData, table),
    );
    tableContainer.appendChild(table);

    table.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        this.deleteEntry(e.target.dataset.id, shadowRoot);
      } else if (e.target.classList.contains('edit')) {
        this.editEntry(parseInt(e.target.dataset.id, 10));
      }
    });
  }

  createRow(data, table) {
    const tr = document.createElement('tr');

    // url
    const urlTd = document.createElement('td');
    urlTd.innerText = data.url;
    tr.appendChild(urlTd);

    // username
    const usernameTd = document.createElement('td');
    usernameTd.innerText = data.username;
    tr.appendChild(usernameTd);

    // password
    const passwordTd = document.createElement('td');
    passwordTd.innerText = '*'.repeat(data.password.length);
    tr.appendChild(passwordTd);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.dataset.id = data.id;
    deleteButton.innerText = 'delete';
    tr.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.dataset.id = data.id;
    editButton.innerText = 'edit';
    tr.appendChild(editButton);

    // copy username
    const copyUsernameButton = document.createElement('button');
    copyUsernameButton.classList.add('copy');
    copyUsernameButton.dataset.id = data.id;
    copyUsernameButton.innerText = 'copy username';
    copyUsernameButton.onclick = () => copyToClipboard(data.username);
    tr.appendChild(copyUsernameButton);

    // copy password button
    const copyPasswordButton = document.createElement('button');
    copyPasswordButton.classList.add('copy');
    copyPasswordButton.dataset.id = data.id;
    copyPasswordButton.innerText = 'copy password';
    copyPasswordButton.onclick = () => copyToClipboard(data.password);
    tr.appendChild(copyPasswordButton);

    table.appendChild(tr);
  }

  async deleteEntry(id, shadowRoot) {
    await model.deleteElement(parseInt(id, 10));
    this.buildTable(shadowRoot);
  }

  editEntry(id) {
    const event = new CustomEvent('edit', {
      detail: { id },
    });
    this.dispatchEvent(event);
  }
}

customElements.define('pw-list', List);
