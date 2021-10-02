const guestName = "Манго";

const valueA = 5;

//console.log(valueA.__proto__ === guestName.__proto__);

const book = {
  title: "The Last Kingdom",
};

const clients = ["Mango", "Poly", "Ajax"];

//console.log(clients.__proto__ === book.__proto__);

const location = {
  country: "Jamaica",
  city: "Ocho Rios",
};

// console.log(location.__proto__ === book.__proto__);

//Разные по "типу" объекты в свойстве __proto__ имеют совершенно разные,
//независимые объекты.
//У одинаковых по типу объектов, в свойстве __proto__ хранится ссылка
//на один и тот же объект, поэтому они равны.

//Разные по "типу" объекты, это значит, что при создании объекта
//использовались разные классы либо функции конструкторы

//У любого объекта есть свойство __proto__
//Чтобы понимать, что это за __proto__, нужно точно знать
//с помощью какой функции-конструктора (класса) создан данный объект

//Встроенные функции-конструкторы (они же классы)
//Object, Promise, Function, Boolean, Number, String, Array

const promise = new Promise(() => {}); //new Promise(...)
const man = {}; // new Object(...)
const users = []; // new Array(...)
function multiply() {} // new Function(...)
const fn = function () {}; // new Function(...)
const arrowAdd = () => {}; // new Function(...)
class User {} // new Function(...)
// console.log(multiply.__proto__ !== fn.__proto__);
// console.log(arrowAdd.__proto__ !== User.__proto__);
const age = 21; // new Number(...) //При таком обращении в памяти временно создается объектная версия этого примитива
const name = "Ajax"; //new String (...) //При таком обращении в памяти временно создается объектная версия этого примитива
const areYouOkey = true; //new Boolean(...) //При таком обращении в памяти временно создается объектная версия этого примитива
