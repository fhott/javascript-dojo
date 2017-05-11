const hotmartDev = {
  age: 20,
  futureRole: "front-end web developer",
  id: 100,
  name: 'Bob'
};

function greeting(obj) {
  // greeting is supposed to output "Hi, my name is Bob, I'm 20 years old and I want to be a front-end web developer!!!";
  return `Hi, my name is ${obj.name}, I'm ${obj.age} years old and I want to be a ${obj.futureRole}!!!`;
};

// console.log('GREETING answer:', greeting(hotmartDev));

module.exports = greeting;
