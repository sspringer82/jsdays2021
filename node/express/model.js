const data = [
  {
    id: 1,
    firstname: 'Klaus',
    lastname: 'Müller',
  },
  {
    id: 2,
    firstname: 'Petra',
    lastname: 'Meier',
  },
];

module.exports = {
  async getAll() {
    return data;
  },
  async getOneById(id) {
    return data.find(e => e.id === id);
  },
  async add(entry) {
    const id = Math.max(...data.map(e => e.id)) + 1;
    entry.id = id;
    data.push(entry);
    return entry;
  },
  async edit(entry) {
    const index = data.findIndex(e => e.id === entry.id);
    data[index] = entry;
    retur entry;
  },
  async delete(id) {
    const index = data.findIndex(e => e.id === id);
    data.splice(index, 1);
  }
};