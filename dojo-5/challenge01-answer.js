const stringToBeRegexed = 'At the end of January, Carnegie Mellon computer scientists achieved a major milestone: their algorithm, Libratus, beat a set of professional poker players in a 120,000-hand tournament. While humans have fallen to computers in a variety of games, notably chess and go, poker is fundamentally different, in that each player has information that is not available to the rest. A fundamentally different sort of AI is required to deal with this sort of imperfect information.';

const extractEvery3Numbers = text => {
  // code a regex to extract an array of numbers from the stringToBeRegexed variable;
  const regex = /\d{3}/g;
  return text.match(regex);
};

// console.log('REGEX answer:', extractEvery3Numbers(stringToBeRegexed));

module.exports = extractEvery3Numbers;
