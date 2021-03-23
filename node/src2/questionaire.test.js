jest.mock('readline');

const readline = require('readline');

const Questionaire = require('./questionaire');

describe('questionaire', () => {
  it('should do', () => {
    expect(true).toBe(true);
  });

  it('should create an instance', () => {
    const i = new Questionaire();
    expect(readline.createInterface).toHaveBeenCalled();
  });

  it('should handle the answer correct', () => {
    // arrange
    const q = new Questionaire();
    const resolve = jest.fn();
    // act
    q.handleAnwswer(resolve, { r: 10 }, 10);
    // assert
    expect(resolve).toHaveBeenCalledWith(true);
  });

  it('should handle the answer wrong', () => {
    // arrange
    const q = new Questionaire();
    const resolve = jest.fn();
    // act
    q.handleAnwswer(resolve, { r: 10 }, 11);
    // assert
    expect(resolve).toHaveBeenCalledWith(false);
  });
});
