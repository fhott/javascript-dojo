const assert = require('assert');
// const print = require('print');

const getMiddle = (s) => {

};

describe('teste', () => {
  it('should return "es" form "test"', () => {
    assert.equal(getMiddle("test"), "es");
  });

  it('should return "A" form "A"', () => {
    assert.equal(getMiddle("A"), "A");
  });

  it('should return "dd" form "middle"', () => {
    assert.equal(getMiddle("middle"), "dd");
  });

  it('should return "m" form "Hotmart"', () => {
    assert.equal(getMiddle("Hotmart"), "m");
  });

  it('should return "g" form "program"', () => {
    assert.equal(getMiddle("program"), "g");
  });
});