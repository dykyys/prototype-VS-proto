function Car(model) {
  this.model = model;
}

Car.prototype.getModel = function () {
  console.log(this.model);
};

const audi = new Car("audi");
// console.log(audi.__proto__ === Car.prototype); //что будет в консоли?
const volvo = new Car("volvo");
// console.log(volvo.__proto__); //что будет в консоли?

//===============================
// console.log({}.prototype === {}.__proto__);

//===============================
function Component() {}
// console.log(Component.prototype === Component.__proto__);

//===============================
function ComponentB() {}
// console.log(Component.__proto__ === ComponentB.__proto__);
// console.log(Component.prototype === ComponentB.prototype);
// console.log(Component.prototype);
//===============================
const arrowAdd = () => {};
// console.log(arrowAdd.prototype === Object.prototype);
// console.log(arrowAdd.prototype);
//===============================
const valueA = 5;
// console.log(valueA.prototype === Number.prototype);
// console.log(valueA.__proto__ === Number.prototype);

//===============================
// console.log(Car.__proto__ === Function.prototype);
// console.log(Car.__proto__ === ???)

//===============================
const age = 21;
// console.log(age.__proto__ === Number.prototype);
// console.log(age.__proto__.__proto__ === Number.prototype.__proto__);
// console.log(
//   age.__proto__.__proto__.__proto__ === Number.prototype.__proto__.__proto__
// );
// console.log(Number.prototype.__proto__ === Object.prototype);
// console.log(
//   Number.prototype.__proto__.__proto__ === Object.prototype.__proto__
// );

// console.log(age.__proto__.__proto__.__proto__ === Object.prototype.__proto__);
//Эта запись имеет смысл? если да, то что нужно указать чтобы было true?
// console.log(age.__proto__.__proto__.__proto__ === null);
