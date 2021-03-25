const db = new Dexie('pw');
db.version(1).stores({
  pw: '++id, username, password, url',
});

const model = {
  save(entry) {
    if (entry.id) {
      this.editElement(entry);
    } else {
      this.addElement(entry);
    }
  },
  addElement(entry) {
    delete entry.id;
    return db.pw.add(entry);
  },
  editElement(entry) {
    localStorage.setItem(entry.id, JSON.stringify(entry));
  },
  deleteElement(id) {
    localStorage.removeItem(id);
  },
  getAllElements() {
    const data = [];
    for (let i = 0; i < localStorage.length; i++) {
      data.push(this.getOneByIndex(i));
    }
    return data;
  },
  getOneByIndex(i) {
    return JSON.parse(localStorage.getItem(localStorage.key(i)));
  },
  getOneById(id) {
    return JSON.parse(localStorage.getItem(id));
  },
};

export default model;
