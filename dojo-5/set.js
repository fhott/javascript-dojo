let s = new Set()
s.add("hello").add("goodbye").add("hello").add("bla")
s.size === 3
console.log('s.size === 3', s.size === 3);
s.has("hello") === true
console.log('s.has("hello") === true', s.has("hello") === true);
for (let key of s.values()) // insertion order (arbitrary on ES5)
    console.log(key)


let set = new Set([1, 2, 3, 4, 5]);

set = new Set([...set].filter(x => (x % 2) == 0));
console.log('set', set);

set = new Set([...set].map(x => x * 2));
console.log('set', set);
