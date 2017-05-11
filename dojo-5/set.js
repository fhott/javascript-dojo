let s = new Set()
s.add("hello").add("goodbye").add("hello").add("bla")
s.size === 3
console.log('s.size === 3', s.size === 3);
s.has("hello") === true
console.log('s.has("hello") === true', s.has("hello") === true);
for (let key of s.values()) // insertion order (arbitrary on ES5)
    console.log(key)
