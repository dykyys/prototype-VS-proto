const guestName = "Манго";
// console.log(guestName.__proto__ === String.prototype);

const valueA = 5;
// console.log(valueA.__proto__ === Number.prototype);

const book = {
  title: "The Last Kingdom",
};
// console.log(book.__proto__ === Object.prototype);
// console.log(book.prototype);
//У любого объекта есть  __proto__
//prototype есть у класса либо функции конструктора
//__proto__ любого объекта ссылается на prototype класса / функции конструктора,
//с помощью которой был создан (сконструирован)

function Component() {}

const newComponent = new Component();

// console.log(newComponent.__proto__ === Component.prototype);
