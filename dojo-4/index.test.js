const assert = require('assert');
const print = require('print');

describe('Symbol()', () => {
  it(`type is equal to 'symbol'`, () => {
      assert.equal(typeof Symbol(), 'symbol');
  });

  it('can have a description', () => {
    assert.equal(Symbol('foo').toString(), 'Symbol(foo)');
  });

  it('can be used as object keys', () => {
    let myObj = {};
    let fooSym = Symbol('foo');
    let otherSym = Symbol('bar');

    myObj['foo'] = 'bar';
    myObj[fooSym] = 'baz';
    myObj[otherSym] = 'bing';

    assert.equal(myObj.foo, 'bar');
    assert.equal(myObj[fooSym], 'baz');
    assert.equal(myObj[otherSym], 'bing');
  });

  it('is hidden from the Object keys', () => {
    const fooSym = Symbol('foo');

    let myObj = {};

    myObj['foo'] = 'bar';
    myObj[fooSym] = 'baz';

    assert.equal( Object.keys(myObj).toString(), [ 'foo' ] );
    assert.equal( Object.getOwnPropertyNames(myObj).toString(), [ 'foo' ]);

    // Only shows with `getOwnPropertySymbols`
    // assert.equal( Object.getOwnPropertySymbols(myObj), fooSym );
  });

  it(`is unique`, () => {
    assert.notEqual(Symbol(), Symbol());
    assert.notEqual(Symbol('foo'), Symbol('foo'));

    var foo1 = Symbol('foo');
    var foo2 = Symbol('foo');
    var object = {
        [foo1]: 1,
        [foo2]: 2,
    };
    assert.equal(object[foo1], 1);
    assert.equal(object[foo2], 2);
  });

  it('is not so unique', () => {
    assert.notEqual(Symbol('foo'), Symbol('foo'));
    assert.equal(Symbol.for('foo'), Symbol.for('foo'));
  });

  it('can be shared globally', () => {
    const localFooSymbol = Symbol('foo');
    const globalFooSymbol = Symbol.for('foo');

    // Symbol.keyFor()
    assert.equal(Symbol.keyFor(localFooSymbol), undefined);
    assert.equal(Symbol.keyFor(globalFooSymbol), 'foo');
    assert.equal(Symbol.for(Symbol.keyFor(globalFooSymbol)), Symbol.for('foo'));
  });
});