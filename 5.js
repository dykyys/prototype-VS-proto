const book = {
  title: "The Last Kingdom",
};
// console.log(book.__proto__);

class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name);
  }
}

const mango = new User("Mango");
// console.log(User.__proto__ === Function.prototype);
//console.log(User.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);
// console.log(User.prototype.__proto__ === Object.prototype);

const arrowAdd = () => {};
// console.log(arrowAdd.prototype);
// console.log(arrowAdd.__proto__);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Function.prototype.__proto__.__proto__ === Object.prototype.__proto__);

// function Component() {}
// function Component1() {}
// console.log(Component.prototype === Component1.prototype);
const age = 21;
// console.log(age.__proto__.__proto__.__proto__ === Object.prototype.__proto__);
// console.log(Number.prototype.__proto__ === Object.prototype);
// console.log(Boolean.prototype.__proto__ === Object.prototype);
