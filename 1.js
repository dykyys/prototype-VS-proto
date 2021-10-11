const iStudyJS = true;
//console.log(iStudyJS.__proto__); new Boolean()

const guestName = "Манго";
//console.log(guestName.__proto__); new String()

const valueA = 5;
//console.log(valueA.__proto__); new Number()
//При таком обращении в памяти временно создается объектная версия этого примитива
//он (примитив) становится объектом, у которого, тоже, есть __proto__
//применяется для строк, чисел, булевых значений.
