const assert = require('assert');
const extractEvery3Numbers = require('./challenge01');
const greeting = require('./challenge02');

describe('Dojo 02', function() {
  it('should expose how to escape characters using JS', function() {
    assert.equal(`\``, '`');
    assert.equal(`${10+20}`, '30');
  });

  it('should make string interpolation work', function() {
    const hotmartDev = {
      age: 20,
      futureRole: "front-end web developer",
      id: 100,
      name: 'Bob'
    };

    assert.equal(greeting(hotmartDev), "Hi, my name is Bob, I'm 20 years old and I want to be a front-end web developer!!!");
  });

  it('should make regex work', function() {
    const stringToBeRegexed = 'At the end of January, Carnegie Mellon computer scientists achieved a major milestone: their algorithm, Libratus, beat a set of professional poker players in a 120,000-hand tournament. While humans have fallen to computers in a variety of games, notably chess and go, poker is fundamentally different, in that each player has information that is not available to the rest. A fundamentally different sort of AI is required to deal with this sort of imperfect information.';

    assert.deepEqual(extractEvery3Numbers(stringToBeRegexed), ['120', '000']);
  });
});
