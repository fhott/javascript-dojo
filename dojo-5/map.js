let m = new Map();
let s = Symbol();

m.set("hello", 42);
m.set(s, 34);
console.log('m.get(s) === 34', m.get(s) === 34);
console.log('m.size === 2', m.size === 2);

for (let [ key, val ] of m.entries()) {
  console.log(key + " = " + val);
}

// Symbols cannot be printed like that
