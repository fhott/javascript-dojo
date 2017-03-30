// const fooSym = Symbol('foo');

// let myObj = {};

// myObj['foo'] = 'bar';
// myObj[fooSym] = 'baz';

// console.log( Object.keys(myObj) ); // -> [ 'foo' ]
// console.log(Object.getOwnPropertyNames(myObj) ); // -> [ 'foo' ]

// Only shows with `getOwnPropertySymbols`
// console.log( Object.getOwnPropertySymbols(myObj) ); // -> [ Symbol(foo) ]




// Iterators

// for (const x of ['a', 'b']) {
//     console.log(x);
// }

// function printArgs() {
//     for (const x of arguments) {
//         console.log(x);
//     }
// }
// printArgs('a', 'b', 'c', 'd');

function objectEntries(obj) {
    let index = 0;

    // In ES6, you can use strings or symbols as property keys,
    // Reflect.ownKeys() retrieves both
    const propKeys = Reflect.ownKeys(obj);

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (index < propKeys.length) {
                const key = propKeys[index];
                index++;
                return { value: [key, obj[key]] };
            } else {
                return { done: true };
            }
        }
    };
}

const obj = {
	first: 'Jane',
	last: 'Doe'
};
for (const [key,value] of objectEntries(obj)) {
  console.log(`${key}: ${value}`);
}