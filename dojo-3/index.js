var aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args)
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            })
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
}

class Person {

	constructor(id, name, salary) {
		this.id = id;
		this.name = name;
		this._baseSalary = salary;
	}

	toString() {
		return "(" + this.id + ") " + this.name + " with a salary of " + this.salary;
	}

	get salary() {
		return this._baseSalary * 1.5;
	}

}

class Coffee {

	initializer() {
		this._drinksCoffee = true;
	}

	get drinksCoffee() {
		return this._drinksCoffee ? "Yep!" : "Nah...";
	}

	set drinksCoffee(drinksCoffee) {
		this._drinksCoffee = drinksCoffee;
	}

}

class Developer extends aggregation(Person,Coffee) {
	constructor(id, name, baseSalary, languages) {
		super(id, name, baseSalary);
		this.languages = languages;
	}

	toString() {
		return super.toString() + " and knowledge on " + this.languages + ". Does " + this.name + " drinks coffee? " + this.drinksCoffee;
	}

	static getAllLanguages() {
		return ["Java", "JavaScript", "C#", "Python", "Groovy"];
	}
}

var igor = new Developer(1, "Igor", 1000, ["Java"]);
console.log(igor.toString());
igor.drinksCoffee = false;
console.log(igor.toString());