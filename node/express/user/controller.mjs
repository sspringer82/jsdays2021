import model from './model.js';

const controller = {
  async getAll(req, res) {
    const data = await model.getAll();
    res.json(data);
  },
  async getOne(req, res) {
    const user = await model.getOneById(parseInt(req.params.id, 10));
    res.json(user);
  },
  async add(req, res) {
    const user = await model.add(req.body);
    res.json(user);
  },
  async edit(req, res) {
    const user = await model.edit(req.body);
    res.json(user);
  },
  async delete(req, res) {
    const user = await model.delete(parseInt(req.params.id, 10));
    res.json(true);
  },
};

export default controller;
