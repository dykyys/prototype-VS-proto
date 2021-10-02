//У объекта, который одновременно является классом либо функцией
//есть prototype
class User {}
function Component() {}
const API = function () {};

// console.log(User.prototype);
// console.log(Component.prototype);
// console.log(API.prototype);

// console.log(Object.prototype);
// console.log(Promise.prototype);
// console.log(Function.prototype);
// console.log(Boolean.prototype);
// console.log(Number.prototype);
// console.log(String.prototype);
// console.log(Array.prototype);

//Зная с помощью какого класса/функции-конструктора был
//создан наш объект, мы можем определить ссылка на какой prototype храниться в
//свойстве __proto__ нашего объекта

// console.log(Object.prototype === Promise.prototype);// false

//Каждый prototype это независимый объект,
//с определенным набором свойств и методов
