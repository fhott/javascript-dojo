let m = new Map();
let s = Symbol();

m.set("hello", 42);
m.set(s, 34);
console.log('m.get(s) === 34', m.get(s) === 34);
console.log('m.size === 2', m.size === 2);

// for (let [ key, val ] of m.entries()) {
//   console.log(key + " = " + val);
// }
// Symbols cannot be printed like that


// Basic operations
let map = new Map();

map.set('foo', 123);
map.get('foo')
// 123

map.has('foo')
// true
map.delete('foo')
// true
map.has('foo')
// false


map.set('foo', true);
map.set('bar', false);
map.size
// 2

map.clear();
map.size
// 0

// Anything can be a key, even...
map.set(NaN, 123);
map.get(NaN)
// 123

map.get('jkhsdfjhkdsfjhksdv')
// undefined

// Iterating
let mapIterable = new Map([
    [false, 'no'],
    [true,  'yes'],
]);

for (let key of mapIterable.keys()) {
    console.log(key);
}
// Output:
// false
// true

for (let value of mapIterable.values()) {
    console.log(value);
}
// Output:
// no
// yes

for (let entry of mapIterable.entries()) {
    console.log(entry[0], entry[1]);
}
// Output:
// false no
// true yes

// map[Symbol.iterator] === map.entries
for (let [key, value] of mapIterable) {
    console.log(key, value);
}

mapIterable.forEach((value, key) => {
    console.log(key, value);
});
// Output:
// false no
// true yes

// Spread operator
let mapSpread = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
let arr = [...mapSpread.keys()]; // [1, 2, 3]
