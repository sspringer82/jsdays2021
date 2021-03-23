module.exports = {
  createInterface: jest.fn().mockReturnValue({
    question() {},
    close() {},
  }),
};
